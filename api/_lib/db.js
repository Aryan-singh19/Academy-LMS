let cachedSql;

async function getSql() {
    if (cachedSql) return cachedSql;

    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.STORAGE_URL;
    if (!databaseUrl) {
        throw new Error('Database URL missing. Set DATABASE_URL or POSTGRES_URL in Vercel.');
    }

    const { neon } = await import('@neondatabase/serverless');
    cachedSql = neon(databaseUrl);
    return cachedSql;
}

async function getStudentByDevice(sql, deviceId) {
    const rows = await sql`
        SELECT id, device_id, display_name, email, bio, avatar_seed, profile_started_at, created_at, updated_at, last_seen_at
        FROM students
        WHERE device_id = ${deviceId}
        LIMIT 1
    `;
    return rows[0] || null;
}

module.exports = {
    getSql,
    getStudentByDevice
};
