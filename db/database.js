const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.DB_HOST_NAME,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

pool.connect((err) => {
    try {
        if (err) throw err
        console.log("Connected to db!")
    } catch (e) {
        console.log(e)
    }
})

module.exports = pool