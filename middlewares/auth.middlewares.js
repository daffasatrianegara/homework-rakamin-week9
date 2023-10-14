const pool = require('../config/index')
const jwt = require('jsonwebtoken')
require('dotenv').config({path : '../.env'})
const secret_key = process.env.SECRET_KEY || 'koderahasianegara'

const authToken = (req, resp, next) => {
    const token = req.header('Authorization')
    if (!token) {
        return resp.status(401).json({ error: 'Akses ditolak. lakukan login/register terlebih dahulu...' })
    }

    const tokenWithoutBearer = token.replace('Bearer ', '');
    jwt.verify(tokenWithoutBearer, secret_key, (err, user) => {
        if (err) {
            return resp.status(403).json({ error: 'Token tidak valid.' })
        } 
        req.user = user;
        next();
    });
}


const register = (req, resp) => {
    const {id, email, password} = req.body
    if(!id || !email || !password) {
        resp.status(400).json({ error: 'Semua kolom harus diisi.' });
        return;
    }
    pool.query('insert into users (id, email, password) values ($1, $2, $3) returning id', [id, email, password], (err, results) => {
        if(err) {
            resp.status(500).json({ error: 'Failed to register user...' })
        }
    const token = jwt.sign({ email }, secret_key);
    const hasil = 'Bearer ' + token
    resp.status(201).json({ hasil });
    })
}

const login = (req, resp) => {
    const {email, password} = req.body
    pool.query('select id, email, password from users where email=$1', [email], (err, results) => {
        if(err) {
            resp.status(500).json({ error: 'Failed to login...' })
        } else if(results.rowCount === 0) {
            resp.status(404).json({ error: 'data with email ' + email + ' is missing...' });
        }
        const user = results.rows[0]
        const email = user.email;
        if(user.password === password) {
            const token = jwt.sign({ email: email }, secret_key);
            const hasil = 'Bearer ' + token
            resp.json({ hasil });
        } else {
            resp.status(401).json({ error: 'invalid password...' });
        }
    })
}
module.exports = {
    authToken,
    register,
    login,
}