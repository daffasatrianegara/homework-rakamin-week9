const pool = require('../config/index')

const getUsers = (req, resp) => {
    pool.query('select * from users', (err, results) => {
        if(err) {
            throw err
        }
        resp.json(results.rows)
    })
}

const getUsersById = (req, resp) => {
    const id = req.params.id
    pool.query('select * from users where id=$1', [id], (err, results) => {
        if(err) {
            throw err
        }
        resp.json(results.rows)
    })
}

const addUsers = (req, resp) => {
    const { id, email, gender, password, role } = req.body
    pool.query('insert into users (id, email, gender, password, role) values ($1, $2, $3, $4, $5)', [id, email, gender, password, role],
    (err, results) => {
        if(err) {
            resp.status(500).json({ error: 'Error in adding user data...' });
        }
        resp.status(201).json({ message : 'data succesfully added...'});
    })
}

const editUser = (req, resp) => {
    const id = req.params.id
    const {email, gender, password, role} = req.body
    pool.query('update users set email = $1, gender = $2, password = $3, role = $4 where id = $5', [email, gender, password, role, id], (err, results) => {
        if(err) {
            resp.status(500).json({ error: 'Error in editing user data...' });
        }
        resp.status(201).json({ message : 'data succesfully edited...'});
    })
}

const deleteUser = (req, resp) => {
    const id = req.params.id;
    pool.query('DELETE FROM users WHERE id = $1', [id], (err, results) => {
        if (err) {
            resp.status(500).json({ error: 'Error in deleting data...' });
        } else if (results.rowCount === 0) {
            resp.status(404).json({ error: 'data with id ' + id + ' is missing...' });
        }
        resp.status(200).json({ message: 'data succesfully deleted...' });
    });
};

module.exports = {
    getUsers,
    getUsersById,
    addUsers,
    editUser,
    deleteUser,
}