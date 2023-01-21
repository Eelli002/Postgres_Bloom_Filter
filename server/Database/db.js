const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    port: 5432,
    host: 'localhost',
    database: 'user_search'
})

module.exports = pool;