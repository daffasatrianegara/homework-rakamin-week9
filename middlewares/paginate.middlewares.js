const pool = require('../config/index')

const paginateFilms = (req, resp) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    if(limit > 10) {
        return resp.status(401).json({ error: 'Akses ditolak. limit maksimal 10' })
    }
    const offset = (page - 1) * limit
    pool.query('SELECT * FROM movies LIMIT $1 OFFSET $2', [limit, offset], (err, results) => {
        if(err) {
            throw err
        }
        resp.json(results.rows)
    })
}

const paginateUsers = (req, resp) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    if(limit > 10) {
        return resp.status(401).json({ error: 'Akses ditolak. limit maksimal 10' })
    }
    const offset = (page - 1) * limit
    pool.query('SELECT * FROM users LIMIT $1 OFFSET $2', [limit, offset], (err, results) => {
        if(err) {
            throw err
        }
        resp.json(results.rows)
    })
}

module.exports = {
    paginateFilms,
    paginateUsers,
}