require('dotenv').config();
const pg = require('pg');
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

knex('careers').select().then(()=> console.log('Database Connected'));
module.exports = { knex }