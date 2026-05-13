const { getSql, getStudentByDevice } = require('./_lib/db');
const { allowMethods, readJsonBody, sendJson } = require('./_lib/http');

function normalizeSnapshot(snapshot) {
    return snapshot && typeof snapshot === 'object' ? snapshot : {};
}

function normalizeProfilePatch(profile) {
    const patch = profile && typeof profile === 'object' ? profile : {};
    return {
        email: String(patch.email || '').trim() || null,
        bio: String(patch.bio || '').trim().slice(0, 1000),
        headline: String(patch.headline || '').trim().slice(0, 180),
        githubUrl: String(patch.githubUrl || '').trim().slice(0, 240),
        linkedinUrl: String(patch.linkedinUrl || '').trim().slice(0, 240),
        websiteUrl: String(patch.websiteUrl || '').trim().slice(0, 240),
        extraLinks: patch.extraLinks && typeof patch.extraLinks === 'object' ? patch.extraLinks : {}
    };
}

async function upsertStudent(sql, deviceId, displayName, snapshot, profilePatch) {
    const rows = await sql`
        INSERT INTO students (
            device_id,
            display_name,
            email,
            bio,
            headline,
            avatar_seed,
            github_url,
            linkedin_url,
            website_url,
            extra_links,
            profile_started_at,
            last_seen_at
        )
        VALUES (
            ${deviceId},
            ${displayName},
            ${profilePatch.email || snapshot.email || null},
            ${profilePatch.bio || ''},
            ${profilePatch.headline || ''},
            ${displayName.toLowerCase().replace(/[^a-z0-9]+/g, '-')},
            ${profilePatch.githubUrl || ''},
            ${profilePatch.linkedinUrl || ''},
            ${profilePatch.websiteUrl || ''},
            ${JSON.stringify(profilePatch.extraLinks || {})}::jsonb,
            ${snapshot.profileStartedAt || new Date().toISOString()},
            NOW()
        )
        ON CONFLICT (device_id)
        DO UPDATE SET
            display_name = EXCLUDED.display_name,
            email = COALESCE(EXCLUDED.email, students.email),
            bio = CASE WHEN EXCLUDED.bio <> '' THEN EXCLUDED.bio ELSE students.bio END,
            headline = CASE WHEN EXCLUDED.headline <> '' THEN EXCLUDED.headline ELSE students.headline END,
            github_url = CASE WHEN EXCLUDED.github_url <> '' THEN EXCLUDED.github_url ELSE students.github_url END,
            linkedin_url = CASE WHEN EXCLUDED.linkedin_url <> '' THEN EXCLUDED.linkedin_url ELSE students.linkedin_url END,
            website_url = CASE WHEN EXCLUDED.website_url <> '' THEN EXCLUDED.website_url ELSE students.website_url END,
            extra_links = CASE WHEN EXCLUDED.extra_links <> '{}'::jsonb THEN EXCLUDED.extra_links ELSE students.extra_links END,
            last_seen_at = NOW(),
            updated_at = NOW()
        RETURNING
            id,
            device_id,
            display_name,
            email,
            bio,
            headline,
            avatar_url,
            github_url,
            linkedin_url,
            website_url,
            extra_links,
            created_at,
            updated_at,
            last_seen_at
    `;
    return rows[0];
}

async function syncSnapshot(sql, student, snapshot) {
    const topicIds = new Set([
        ...Object.keys(snapshot.completedTopics || {}),
        ...Object.keys(snapshot.bookmarks || {}),
        ...Object.keys(snapshot.notes || {}),
        ...Object.keys(snapshot.highlights || {})
    ]);

    if (snapshot.lastVisited && snapshot.lastVisited.topicId) {
        topicIds.add(snapshot.lastVisited.topicId);
    }

    for (const topicId of topicIds) {
        const topicMeta = (snapshot.topicDirectory || {})[topicId] || {};
        const lastVisitedAt = snapshot.lastVisited && snapshot.lastVisited.topicId === topicId
            ? snapshot.updatedAt || new Date().toISOString()
            : null;

        await sql`
            INSERT INTO student_topic_progress (
                student_id,
                course_id,
                unit_id,
                topic_id,
                completed,
                bookmarked,
                note_text,
                highlights_json,
                last_visited_at
            )
            VALUES (
                ${student.id},
                ${topicMeta.courseId || 'unknown'},
                ${topicMeta.unitId || null},
                ${topicId},
                ${Boolean((snapshot.completedTopics || {})[topicId])},
                ${Boolean((snapshot.bookmarks || {})[topicId])},
                ${(snapshot.notes || {})[topicId] || ''},
                ${JSON.stringify((snapshot.highlights || {})[topicId] || [])}::jsonb,
                ${lastVisitedAt}
            )
            ON CONFLICT (student_id, topic_id)
            DO UPDATE SET
                course_id = EXCLUDED.course_id,
                unit_id = EXCLUDED.unit_id,
                completed = EXCLUDED.completed,
                bookmarked = EXCLUDED.bookmarked,
                note_text = EXCLUDED.note_text,
                highlights_json = EXCLUDED.highlights_json,
                last_visited_at = COALESCE(EXCLUDED.last_visited_at, student_topic_progress.last_visited_at),
                updated_at = NOW()
        `;
    }

    for (const [unitId, draft] of Object.entries(snapshot.examDrafts || {})) {
        await sql`
            INSERT INTO exam_drafts (
                student_id,
                unit_id,
                medium_answers,
                hard_answers
            )
            VALUES (
                ${student.id},
                ${unitId},
                ${JSON.stringify(draft.medium || [])}::jsonb,
                ${JSON.stringify(draft.hard || [])}::jsonb
            )
            ON CONFLICT (student_id, unit_id)
            DO UPDATE SET
                medium_answers = EXCLUDED.medium_answers,
                hard_answers = EXCLUDED.hard_answers,
                updated_at = NOW()
        `;
    }

    for (const [quizId, attempt] of Object.entries(snapshot.quizAttempts || {})) {
        await sql`
            INSERT INTO quiz_attempts (
                student_id,
                quiz_id,
                course_id,
                topic_id,
                question_text,
                selected_option,
                is_correct,
                attempted_at
            )
            VALUES (
                ${student.id},
                ${quizId},
                ${attempt.courseId || 'unknown'},
                ${attempt.topicId || 'unknown'},
                ${attempt.question || ''},
                ${Number.isInteger(attempt.selected) ? attempt.selected : 0},
                ${Boolean(attempt.correct)},
                ${attempt.attemptedAt || new Date().toISOString()}
            )
            ON CONFLICT (student_id, quiz_id, attempted_at)
            DO NOTHING
        `;
    }

    for (const session of snapshot.practiceSessions || []) {
        await sql`
            INSERT INTO practice_sessions (
                student_id,
                course_id,
                course_label,
                mode,
                correct_count,
                total_count,
                accuracy,
                finished_at
            )
            VALUES (
                ${student.id},
                ${session.courseId || 'mixed'},
                ${session.courseLabel || 'Mixed practice'},
                ${session.mode || 'drill'},
                ${session.correct || 0},
                ${session.total || 0},
                ${session.accuracy || 0},
                ${session.finishedAt || new Date().toISOString()}
            )
            ON CONFLICT (student_id, course_id, mode, finished_at, total_count)
            DO NOTHING
        `;
    }

    await sql`
        INSERT INTO student_state_snapshots (student_id, payload)
        VALUES (${student.id}, ${JSON.stringify(snapshot)}::jsonb)
    `;
}

async function getProfileResponse(sql, student) {
    const [summaryRows, practiceRows, courseRows, recentRows, uploadRows] = await Promise.all([
        sql`
            WITH quiz_stats AS (
                SELECT
                    COUNT(*)::int AS attempts_count,
                    COALESCE(SUM(CASE WHEN is_correct THEN 1 ELSE 0 END), 0)::int AS correct_count
                FROM quiz_attempts
                WHERE student_id = ${student.id}
            ),
            connection_stats AS (
                SELECT COUNT(*)::int AS connections_count
                FROM student_connections
                WHERE student_id = ${student.id}
            ),
            dm_stats AS (
                SELECT COUNT(*)::int AS direct_messages_count
                FROM direct_messages
                WHERE recipient_student_id = ${student.id}
            ),
            topic_stats AS (
                SELECT
                    COUNT(DISTINCT CASE WHEN completed THEN topic_id END)::int AS completed_topics,
                    COUNT(DISTINCT CASE WHEN bookmarked THEN topic_id END)::int AS bookmarked_topics,
                    COUNT(DISTINCT topic_id)::int AS tracked_topics,
                    COALESCE(SUM(CASE WHEN note_text <> '' THEN 1 ELSE 0 END), 0)::int AS notes_count,
                    COALESCE(SUM(jsonb_array_length(highlights_json)), 0)::int AS highlights_count
                FROM student_topic_progress
                WHERE student_id = ${student.id}
            )
            SELECT *
            FROM topic_stats, quiz_stats, connection_stats, dm_stats
        `,
        sql`
            SELECT
                id,
                course_id,
                course_label,
                mode,
                correct_count,
                total_count,
                accuracy,
                finished_at
            FROM practice_sessions
            WHERE student_id = ${student.id}
            ORDER BY finished_at DESC
            LIMIT 10
        `,
        sql`
            SELECT
                course_id,
                COUNT(*)::int AS tracked_topics,
                COUNT(*) FILTER (WHERE completed)::int AS completed_topics,
                COUNT(*) FILTER (WHERE bookmarked)::int AS bookmarked_topics
            FROM student_topic_progress
            WHERE student_id = ${student.id}
            GROUP BY course_id
            ORDER BY course_id
        `,
        sql`
            SELECT course_id, unit_id, topic_id, last_visited_at
            FROM student_topic_progress
            WHERE student_id = ${student.id} AND last_visited_at IS NOT NULL
            ORDER BY last_visited_at DESC
            LIMIT 8
        `,
        sql`
            SELECT
                id,
                upload_kind,
                title,
                description,
                blob_url,
                download_url,
                content_type,
                size_bytes,
                uploaded_at
            FROM student_uploads
            WHERE student_id = ${student.id}
            ORDER BY uploaded_at DESC
            LIMIT 12
        `
    ]);

    return {
        student,
        summary: summaryRows[0] || {},
        courseProgress: courseRows,
        recentActivity: recentRows,
        practiceHistory: practiceRows,
        uploads: uploadRows
    };
}

module.exports = async function handler(req, res) {
    if (!allowMethods(req, res, ['GET', 'POST'])) return;

    try {
        const sql = await getSql();

        if (req.method === 'GET') {
            const deviceId = String(req.query.deviceId || '').trim();
            if (!deviceId) {
                sendJson(res, 400, { error: 'deviceId is required.' });
                return;
            }

            const student = await getStudentByDevice(sql, deviceId);
            if (!student) {
                sendJson(res, 404, { error: 'No student profile found for this device yet.' });
                return;
            }

            sendJson(res, 200, await getProfileResponse(sql, student));
            return;
        }

        const body = await readJsonBody(req);
        const deviceId = String(body.deviceId || '').trim();
        const snapshot = normalizeSnapshot(body.snapshot);
        const displayName = String(body.displayName || snapshot.studentName || 'Student').trim().slice(0, 40);
        const profilePatch = normalizeProfilePatch(body.profile);

        if (!deviceId) {
            sendJson(res, 400, { error: 'deviceId is required.' });
            return;
        }

        const student = await upsertStudent(sql, deviceId, displayName || 'Student', snapshot, profilePatch);
        if (Object.keys(snapshot).length) {
            await syncSnapshot(sql, student, snapshot);
        }

        sendJson(res, 200, {
            message: 'Student profile synced with Neon.',
            ...(await getProfileResponse(sql, student))
        });
    } catch (error) {
        console.error('Profile API error', error);
        sendJson(res, 500, { error: error.message || 'Unable to sync profile.' });
    }
};
