const express = require('express')
const getMov = require('./controllers/movies.controllers')
const getUsr = require('./controllers/users.controllers')
const auth = require('./middlewares/auth.middlewares')
const paginate = require('./middlewares/paginate.middlewares')
const documentation = require('./routes/documentation')
const morgan = require('morgan')
var swaggerJsdoc = require('swagger-jsdoc')
var swaggerUi = require('swagger-ui-express')
const bodyParser = require('body-parser');
require('dotenv').config()
const pool = require('./config/index')
const app = express()
const PORT = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(morgan('tiny'))
pool.connect((err, res) => {
    if(err) {
        throw err
    }
    console.log('Database connected...')
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// MOVIES
app.get('/movies', auth.authToken, getMov.getFilms)
app.get('/movies/:id', auth.authToken, getMov.getFilmById)
app.post('/movies/add', auth.authToken, getMov.addFilm)
app.put('/movies/edit/:id', auth.authToken, getMov.editFilm)
app.delete('/movies/delete/:id', auth.authToken, getMov.deleteFilm)

// USERS
app.get('/users', auth.authToken, getUsr.getUsers)
app.get('/users/:id', auth.authToken, getUsr.getUsersById)
app.post('/users/add', auth.authToken, getUsr.addUsers)
app.put('/users/edit/:id', auth.authToken, getUsr.editUser)
app.delete('/users/delete/:id', auth.authToken, getUsr.deleteUser)

// AUTHENTICATION
app.post('/users/register', auth.register)
app.post('/users/login', auth.login)
app.get('/users/data/verify', auth.authToken, (req, res) => {
    res.send('user terverifikasi...')
})

// PAGINATE
app.get('/paginate/movies', auth.authToken, paginate.paginateFilms)
app.get('/paginate/users', auth.authToken, paginate.paginateUsers)


// API DOCUMENTATION
const specs = swaggerJsdoc(documentation.options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))


app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})