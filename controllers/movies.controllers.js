const pool = require('../config/index')


const getFilms = (req, resp) => {
    pool.query('select * from movies', (err, results) => {
        if(err) {
            throw err
        }
        resp.json(results.rows)
    })
}

const getFilmById = (req, resp) => {
    const id = req.params.id
    pool.query('select * from movies where id=$1', [id], (err, results) => {
        if(err) {
            throw err
        }
        resp.json(results.rows)
    })
}

const addFilm = (req, resp) => {
    const { id, title, genres, year } = req.body
    pool.query('insert into movies (id, title, genres, year) values ($1, $2, $3, $4)', [id, title, genres, year],
    (err, results) => {
        if(err) {
            resp.status(500).json({ error: 'Error in adding movie data...' });
        }
        resp.status(201).json({ message : 'data succesfully added...'});
    })
}

const editFilm = (req, resp) => {
    const id = req.params.id
    const {title, genres, year} = req.body
    pool.query('update movies set title = $1, genres = $2, year = $3 where id = $4', [title, genres, year, id], (err, results) => {
        if(err) {
            resp.status(500).json({ error: 'Error in editing movie data...' });
        }
        resp.status(201).json({ message : 'data succesfully edited...'});
    })
}

const deleteFilm = (req, resp) => {
    const id = req.params.id;
    pool.query('DELETE FROM movies WHERE id = $1', [id], (err, results) => {
        if (err) {
            resp.status(500).json({ error: 'Error in deleting data...' });
        } else if (results.rowCount === 0) {
            resp.status(404).json({ error: 'data with id ' + id + ' is missing...' });
        }
        resp.status(200).json({ message: 'data succesfully deleted...' });
    });
};

module.exports = {
    getFilms,
    getFilmById,
    addFilm,
    editFilm,
    deleteFilm,
}