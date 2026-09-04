const crypto = require('crypto');

// In-memory mock database for offline / local-first execution in AI Studio
class MockDatabase {
    constructor() {
        this.nextId = 1;
        this.students = new Map();
        this.studentsByDevice = new Map();
        this.studentsByEmail = new Map();
        this.sessions = new Map();
        this.reports = [];
        this.preferences = new Map();
        this.topicProgress = new Map();
        this.examDrafts = new Map();
        this.quizAttempts = [];
        this.practiceSessions = [];
        this.snapshots = [];
        this.uploads = [];
        this.connections = new Set();
        this.directMessages = [];
        this.topicComments = [];
        this.lectureMessages = [];
        this.lecturePresence = new Map();

        this.seedInitialData();
    }

    seedInitialData() {
        const seedStudents = [
            {
                id: 'student-dev-1',
                device_id: 'device-seed-1',
                display_name: 'Aryan Singh',
                email: 'aryansingh19gh@gmail.com',
                bio: 'Building Academy LMS. Focused on CS semester prep and machine learning revision.',
                headline: 'Computer Science Student',
                avatar_seed: 'aryan',
                avatar_url: '',
                github_url: 'https://github.com/Aryan-singh19',
                linkedin_url: '',
                website_url: '',
                extra_links: {},
                is_banned: false,
                banned_reason: '',
                banned_at: null,
                profile_started_at: new Date(Date.now() - 14 * 86400000).toISOString(),
                created_at: new Date(Date.now() - 14 * 86400000).toISOString(),
                updated_at: new Date().toISOString(),
                last_seen_at: new Date().toISOString(),
                last_login_at: new Date().toISOString()
            },
            {
                id: 'student-dev-2',
                device_id: 'device-seed-2',
                display_name: 'Priya Sharma',
                email: 'priya.sharma@example.edu',
                bio: 'Studying Compiler Design and Computer Networks. Working through revision drills.',
                headline: 'B.Tech CSE - 6th Sem',
                avatar_seed: 'priya',
                avatar_url: '',
                github_url: '',
                linkedin_url: '',
                website_url: '',
                extra_links: {},
                is_banned: false,
                banned_reason: '',
                banned_at: null,
                profile_started_at: new Date(Date.now() - 7 * 86400000).toISOString(),
                created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
                updated_at: new Date().toISOString(),
                last_seen_at: new Date().toISOString(),
                last_login_at: new Date().toISOString()
            }
        ];

        for (const s of seedStudents) {
            this.students.set(s.id, s);
            this.studentsByDevice.set(s.device_id, s);
            if (s.email) this.studentsByEmail.set(s.email, s);
        }

        this.topicComments.push(
            {
                id: 1,
                student_id: 'student-dev-1',
                topic_id: 'cs601-u1-t1',
                course_id: 'cs601',
                message_text: 'Key formula to remember for supervised error gradient: partial derivative of loss w.r.t weights.',
                created_at: new Date(Date.now() - 3600000).toISOString(),
                display_name: 'Aryan Singh'
            },
            {
                id: 2,
                student_id: 'student-dev-2',
                topic_id: 'cs602-u1-t1',
                course_id: 'cs602',
                message_text: 'Check out the OSI 7-layer model comparison with TCP/IP 4-layer model in unit 1.',
                created_at: new Date(Date.now() - 7200000).toISOString(),
                display_name: 'Priya Sharma'
            }
        );

        this.lectureMessages.push(
            {
                id: 1,
                student_id: 'student-dev-1',
                lecture_key: 'cs601-lecture-1',
                scope: 'global',
                message_text: 'Welcome to the CS601 lecture discussion. Feel free to drop questions here.',
                created_at: new Date(Date.now() - 10800000).toISOString(),
                display_name: 'Aryan Singh'
            }
        );
    }

    getStudentByDeviceId(deviceId) {
        return this.studentsByDevice.get(deviceId) || null;
    }

    getStudentById(id) {
        return this.students.get(id) || null;
    }

    upsertStudent(deviceId, displayName, snapshot = {}, profilePatch = {}) {
        let student = this.studentsByDevice.get(deviceId);
        const now = new Date().toISOString();

        if (student) {
            student.display_name = displayName || student.display_name;
            student.email = profilePatch.email || snapshot.email || student.email;
            student.bio = profilePatch.bio !== undefined ? profilePatch.bio : student.bio;
            student.headline = profilePatch.headline !== undefined ? profilePatch.headline : student.headline;
            student.github_url = profilePatch.githubUrl !== undefined ? profilePatch.githubUrl : student.github_url;
            student.linkedin_url = profilePatch.linkedinUrl !== undefined ? profilePatch.linkedinUrl : student.linkedin_url;
            student.website_url = profilePatch.websiteUrl !== undefined ? profilePatch.websiteUrl : student.website_url;
            if (profilePatch.extraLinks) student.extra_links = profilePatch.extraLinks;
            student.updated_at = now;
            student.last_seen_at = now;
        } else {
            student = {
                id: crypto.randomUUID(),
                device_id: deviceId,
                display_name: displayName || 'Student',
                email: profilePatch.email || snapshot.email || null,
                bio: profilePatch.bio || '',
                headline: profilePatch.headline || '',
                avatar_seed: (displayName || 'student').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                avatar_url: '',
                github_url: profilePatch.githubUrl || '',
                linkedin_url: profilePatch.linkedinUrl || '',
                website_url: profilePatch.websiteUrl || '',
                extra_links: profilePatch.extraLinks || {},
                is_banned: false,
                banned_reason: '',
                banned_at: null,
                profile_started_at: snapshot.profileStartedAt || now,
                created_at: now,
                updated_at: now,
                last_seen_at: now,
                last_login_at: now
            };
            this.students.set(student.id, student);
            this.studentsByDevice.set(deviceId, student);
        }

        return student;
    }
}

const mockDb = new MockDatabase();

function createMockSql() {
    const fn = async function (strings, ...values) {
        const query = strings.join(' ? ').replace(/\s+/g, ' ').trim();

        // 1. SELECT students by device_id
        if (query.includes('FROM students') && query.includes('device_id = ?')) {
            const deviceId = values[0];
            const student = mockDb.getStudentByDeviceId(deviceId);
            return student ? [student] : [];
        }

        // 2. SELECT students by id
        if (query.includes('FROM students') && query.includes('id = ?')) {
            const id = values[0];
            const student = mockDb.getStudentById(id);
            return student ? [student] : [];
        }

        // 3. SELECT student from session
        if (query.includes('FROM student_sessions ss') && query.includes('JOIN students s')) {
            const tokenHash = values[0];
            const session = mockDb.sessions.get(tokenHash);
            if (session && !session.revoked_at && new Date(session.expires_at) > new Date()) {
                const student = mockDb.getStudentById(session.student_id);
                return student ? [student] : [];
            }
            return [];
        }

        // 4. INSERT INTO student_sessions
        if (query.includes('INSERT INTO student_sessions')) {
            const studentId = values[0];
            const tokenHash = values[1];
            const deviceId = values[2] || '';
            const userAgent = values[3] || '';
            const expiresAt = values[4] || new Date(Date.now() + 30 * 86400000).toISOString();

            mockDb.sessions.set(tokenHash, {
                id: mockDb.nextId++,
                student_id: studentId,
                session_token_hash: tokenHash,
                device_id: deviceId,
                user_agent: userAgent,
                expires_at: expiresAt,
                created_at: new Date().toISOString(),
                revoked_at: null
            });
            return [];
        }

        // 5. UPDATE student_sessions (revocation)
        if (query.includes('UPDATE student_sessions') && query.includes('revoked_at = NOW()')) {
            const tokenHash = values[0];
            const session = mockDb.sessions.get(tokenHash);
            if (session) {
                session.revoked_at = new Date().toISOString();
            }
            return [];
        }

        // 6. INSERT INTO students ... ON CONFLICT (device_id) DO UPDATE ... RETURNING
        if (query.includes('INSERT INTO students') && query.includes('ON CONFLICT (device_id)')) {
            const deviceId = values[0];
            const displayName = values[1];
            const email = values[2];
            const bio = values[3];
            const headline = values[4];
            const githubUrl = values[6];
            const linkedinUrl = values[7];
            const websiteUrl = values[8];
            let extraLinks = {};
            try {
                extraLinks = typeof values[9] === 'string' ? JSON.parse(values[9]) : (values[9] || {});
            } catch (_) {}

            const student = mockDb.upsertStudent(deviceId, displayName, { email }, {
                email,
                bio,
                headline,
                githubUrl,
                linkedinUrl,
                websiteUrl,
                extraLinks
            });
            return [student];
        }

        // 7. Topic comments
        if (query.includes('FROM topic_comments tc') && query.includes('tc.topic_id = ?')) {
            const topicId = values[0];
            const filtered = mockDb.topicComments
                .filter((c) => c.topic_id === topicId)
                .map((c) => {
                    const student = mockDb.getStudentById(c.student_id);
                    return {
                        ...c,
                        display_name: student ? student.display_name : (c.display_name || 'Student')
                    };
                });
            return filtered;
        }

        if (query.includes('INSERT INTO topic_comments')) {
            const studentId = values[0];
            const topicId = values[1];
            const courseId = values[2];
            const messageText = values[3];
            const student = mockDb.getStudentById(studentId);

            mockDb.topicComments.unshift({
                id: mockDb.nextId++,
                student_id: studentId,
                topic_id: topicId,
                course_id: courseId,
                message_text: messageText,
                created_at: new Date().toISOString(),
                display_name: student ? student.display_name : 'Student'
            });
            return [];
        }

        // 8. Lecture chat & presence
        if (query.includes('FROM lecture_messages lm') && query.includes('lecture_key = ?')) {
            const lectureKey = values[0];
            const scope = values[1] || 'local';
            const messages = mockDb.lectureMessages
                .filter((m) => m.lecture_key === lectureKey && m.scope === scope)
                .map((m) => {
                    const student = mockDb.getStudentById(m.student_id);
                    return {
                        ...m,
                        display_name: student ? student.display_name : (m.display_name || 'Student')
                    };
                });
            return messages;
        }

        if (query.includes('COUNT(DISTINCT student_id)::int AS online_count') && query.includes('FROM lecture_presence')) {
            return [{ online_count: 3 }];
        }

        if (query.includes('INSERT INTO lecture_presence')) {
            const studentId = values[0];
            const lectureKey = values[1];
            const scope = values[2];
            mockDb.lecturePresence.set(`${studentId}:${lectureKey}:${scope}`, Date.now());
            return [];
        }

        if (query.includes('INSERT INTO lecture_messages')) {
            const studentId = values[0];
            const lectureKey = values[1];
            const subjectCode = values[2];
            const scope = values[3];
            const messageText = values[4];
            const student = mockDb.getStudentById(studentId);

            mockDb.lectureMessages.push({
                id: mockDb.nextId++,
                student_id: studentId,
                lecture_key: lectureKey,
                subject_code: subjectCode,
                scope,
                message_text: messageText,
                created_at: new Date().toISOString(),
                display_name: student ? student.display_name : 'Student'
            });
            return [];
        }

        // 9. Social directory & connections
        if (query.includes('FROM students s') && query.includes('s.id <> ?') && query.includes('s.is_banned = FALSE')) {
            const studentId = values[0];
            const directory = [];
            for (const s of mockDb.students.values()) {
                if (s.id !== studentId && !s.is_banned) {
                    directory.push({
                        ...s,
                        connected: mockDb.connections.has(`${studentId}:${s.id}`)
                    });
                }
            }
            return directory;
        }

        if (query.includes('FROM student_connections sc') && query.includes('JOIN students s')) {
            const studentId = values[0];
            const list = [];
            for (const key of mockDb.connections) {
                const [fromId, toId] = key.split(':');
                if (fromId === studentId) {
                    const connected = mockDb.getStudentById(toId);
                    if (connected) list.push(connected);
                }
            }
            return list;
        }

        if (query.includes('INSERT INTO student_connections')) {
            const studentId = values[0];
            const peerId = values[1];
            mockDb.connections.add(`${studentId}:${peerId}`);
            return [];
        }

        if (query.includes('DELETE FROM student_connections')) {
            const studentId = values[0];
            const peerId = values[1];
            mockDb.connections.delete(`${studentId}:${peerId}`);
            return [];
        }

        // 10. Direct messages
        if (query.includes('FROM direct_messages dm')) {
            const studentId = values[0];
            const peerId = values[1];
            return mockDb.directMessages.filter(
                (m) => (m.sender_student_id === studentId && m.recipient_student_id === peerId)
                    || (m.sender_student_id === peerId && m.recipient_student_id === studentId)
            );
        }

        if (query.includes('INSERT INTO direct_messages')) {
            const senderId = values[0];
            const recipientId = values[1];
            const text = values[2];
            const sender = mockDb.getStudentById(senderId);
            const recipient = mockDb.getStudentById(recipientId);

            mockDb.directMessages.push({
                id: mockDb.nextId++,
                sender_student_id: senderId,
                recipient_student_id: recipientId,
                sender_id: senderId,
                recipient_id: recipientId,
                sender_name: sender ? sender.display_name : 'Student',
                recipient_name: recipient ? recipient.display_name : 'Student',
                message_text: text,
                created_at: new Date().toISOString()
            });
            return [];
        }

        // 11. Profile stats query
        if (query.includes('WITH quiz_stats AS') && query.includes('topic_stats AS')) {
            const studentId = values[0];
            let completedTopics = 0;
            let bookmarkedTopics = 0;
            let trackedTopics = 0;
            let notesCount = 0;
            let highlightsCount = 0;

            for (const [key, prog] of mockDb.topicProgress.entries()) {
                if (key.startsWith(`${studentId}:`)) {
                    trackedTopics++;
                    if (prog.completed) completedTopics++;
                    if (prog.bookmarked) bookmarkedTopics++;
                    if (prog.note_text) notesCount++;
                    if (Array.isArray(prog.highlights_json)) highlightsCount += prog.highlights_json.length;
                }
            }

            const attempts = mockDb.quizAttempts.filter((a) => a.student_id === studentId);
            const correctCount = attempts.filter((a) => a.is_correct).length;

            return [{
                attempts_count: attempts.length,
                correct_count: correctCount,
                connections_count: 0,
                direct_messages_count: 0,
                completed_topics: completedTopics,
                bookmarked_topics: bookmarkedTopics,
                tracked_topics: trackedTopics,
                notes_count: notesCount,
                highlights_count: highlightsCount
            }];
        }

        // 12. Topic progress insert
        if (query.includes('INSERT INTO student_topic_progress')) {
            const studentId = values[0];
            const courseId = values[1];
            const unitId = values[2];
            const topicId = values[3];
            const completed = Boolean(values[4]);
            const bookmarked = Boolean(values[5]);
            const noteText = values[6] || '';
            let highlights = [];
            try {
                highlights = typeof values[7] === 'string' ? JSON.parse(values[7]) : (values[7] || []);
            } catch (_) {}
            const lastVisitedAt = values[8] || null;

            mockDb.topicProgress.set(`${studentId}:${topicId}`, {
                student_id: studentId,
                course_id: courseId,
                unit_id: unitId,
                topic_id: topicId,
                completed,
                bookmarked,
                note_text: noteText,
                highlights_json: highlights,
                last_visited_at: lastVisitedAt,
                updated_at: new Date().toISOString()
            });
            return [];
        }

        // 13. Quiz attempts insert
        if (query.includes('INSERT INTO quiz_attempts')) {
            const studentId = values[0];
            mockDb.quizAttempts.push({
                student_id: studentId,
                quiz_id: values[1],
                course_id: values[2],
                topic_id: values[3],
                question_text: values[4],
                selected_option: values[5],
                is_correct: values[6],
                attempted_at: values[7] || new Date().toISOString()
            });
            return [];
        }

        // 14. Practice sessions
        if (query.includes('INSERT INTO practice_sessions')) {
            const studentId = values[0];
            mockDb.practiceSessions.unshift({
                student_id: studentId,
                course_id: values[1],
                course_label: values[2],
                mode: values[3],
                correct_count: values[4],
                total_count: values[5],
                accuracy: values[6],
                finished_at: values[7] || new Date().toISOString()
            });
            return [];
        }

        if (query.includes('FROM practice_sessions') && query.includes('student_id = ?')) {
            const studentId = values[0];
            return mockDb.practiceSessions.filter((s) => s.student_id === studentId).slice(0, 10);
        }

        // 15. Student uploads
        if (query.includes('FROM student_uploads') && query.includes('student_id = ?')) {
            const studentId = values[0];
            return mockDb.uploads.filter((u) => u.student_id === studentId);
        }

        if (query.includes('INSERT INTO student_uploads')) {
            mockDb.uploads.unshift({
                id: mockDb.nextId++,
                student_id: values[0],
                upload_kind: values[1],
                title: values[2],
                description: values[3],
                blob_url: values[4],
                download_url: values[5],
                pathname: values[6],
                content_type: values[7],
                size_bytes: values[8],
                created_at: new Date().toISOString()
            });
            return [];
        }

        // 16. Admin queries
        if (query.includes('FROM students') && query.includes('ORDER BY s.last_seen_at DESC')) {
            return Array.from(mockDb.students.values()).map((s) => ({
                id: s.id,
                display_name: s.display_name,
                email: s.email,
                headline: s.headline,
                bio: s.bio,
                avatar_url: s.avatar_url,
                last_seen_at: s.last_seen_at,
                is_banned: s.is_banned,
                completed_topics: 12,
                tracked_topics: 24,
                quiz_accuracy: 85,
                uploads_count: 0,
                comments_count: 2
            }));
        }

        if (query.includes('FROM student_reports') && query.includes("status = 'open'")) {
            return mockDb.reports.filter((r) => r.status === 'open');
        }

        // 17. Reports insert
        if (query.includes('INSERT INTO student_reports')) {
            mockDb.reports.push({
                id: mockDb.nextId++,
                reporter_student_id: values[0],
                target_student_id: values[1],
                report_reason: values[2],
                report_details: values[3] || '',
                status: 'open',
                created_at: new Date().toISOString()
            });
            return [];
        }

        // 18. Ban / unban
        if (query.includes('UPDATE students') && query.includes('is_banned = TRUE')) {
            const studentId = values[values.length - 1];
            const s = mockDb.getStudentById(studentId);
            if (s) {
                s.is_banned = true;
                s.banned_reason = values[0] || 'Banned by admin';
                s.banned_at = new Date().toISOString();
            }
            return [];
        }

        if (query.includes('UPDATE students') && query.includes('is_banned = FALSE')) {
            const studentId = values[values.length - 1];
            const s = mockDb.getStudentById(studentId);
            if (s) {
                s.is_banned = false;
                s.banned_reason = '';
                s.banned_at = null;
            }
            return [];
        }

        // Default empty array
        return [];
    };

    return fn;
}

module.exports = {
    MockDatabase,
    createMockSql
};
