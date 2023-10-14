require('dotenv').config({path : '../.env'})
const { Pool } = require('pg')

const pool = new Pool ({
    user: process.env.POSTGRES_DB_USER || 'postgres',     
    host: process.env.POSTGRES_DB_HOST || 'localhost',     
    database: process.env.POSTGRES_DB_NAME || 'movies', 
    password: process.env.POSTGRES_DB_PASS || '123', 
    port: parseInt(process.env.POSTGRES_DB_PORT),
})

module.exports = pool