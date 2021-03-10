const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'amsaaa',
    password: 'your PG password',
    port: 5433

});

exports.pool = pool;