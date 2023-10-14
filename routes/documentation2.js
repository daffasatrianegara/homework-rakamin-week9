/**
 * @swagger
 * /users/register:
 *   post:
 *     tags:
 *     - "Users - User Authentication"
 *     summary: Register a new user
 *     operationId: registerUser
 *     description: Register a new user with the provided information.
 *     requestBody:
 *       description: New user data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the registered user.
 *       400:
 *         description: Bad request
 *
 * /users/login:
 *   post:
 *     tags:
 *     - "Users - User Authentication"
 *     summary: Login as a user
 *     operationId: loginUser
 *     description: Authenticate as a registered user.
 *     requestBody:
 *       description: User login data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the logged-in user.
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 */


/**
 * @swagger
 * /movies:
 *   get:
 *     tags:
 *     - "Movies - Everything about Movies"
 *     summary: Get a list of movies
 *     operationId: getMovies
 *     description: Retrieve a list of movies.
 *     security:
 *     - JWTAuth: [] 
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movies'
 * 
 * /movies/add :
 *   post:
 *     tags:
 *     - "Movies - Everything about Movies"
 *     summary: Create a new movie
 *     operationId: createMovie
 *     description: Create a new movie with the given details.
 *     security:
 *     - JWTAuth: []
 *     requestBody:
 *       description: New movie data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               title:
 *                 type: string
 *               genres:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Movie created successfully
 *       400:
 *         description: Bad request
 * 
 * /movies/edit/{id} :
 *   put:
 *     tags:
 *     - "Movies - Everything about Movies"
 *     summary: Update a movie
 *     operationId: updateMovie
 *     description: Update an existing movie.
 *     security:
 *     - JWTAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *       description: ID of the movie to update
 *     requestBody:
 *       description: Updated movie data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genres:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movies'
 * 
 * /movies/delete/{id} :
 *   delete:
 *     tags:
 *     - "Movies - Everything about Movies" 
 *     summary: Delete a movie
 *     operationId: deleteMovie
 *     description: Delete a movie by ID.
 *     security:
 *     - JWTAuth: []
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *       description: ID of the movie to delete
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - "Users - User Management"
 *     summary: Get a list of users
 *     operationId: getUsers
 *     description: Retrieve a list of users.
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 * 
 * /users/add :
 *   post:
 *     tags:
 *       - "Users - User Management"
 *     summary: Create a new user
 *     operationId: createUser
 *     description: Create a new user with the provided details.
 *     security:
 *       - JWTAuth: []
 *     requestBody:
 *       description: New user data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id :
 *                 type : integer
 *               email:
 *                 type: string
 *               gender:
 *                 type: string
 *               password :
 *                 type : string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *       400:
 *         description: Bad request
 *
 * /users/edit/{id}:
 *   put:
 *     tags:
 *       - "Users - User Management"
 *     summary: Update a user
 *     operationId: updateUser
 *     description: Update an existing user.
 *     security:
 *       - JWTAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to update
 *     requestBody:
 *       description: Updated user data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               gender:
 *                 type: string
 *               password :
 *                 type : string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *
 * /users/delete/{id}:
 *   delete:
 *     tags:
 *       - "Users - User Management"
 *     summary: Delete a user
 *     operationId: deleteUser
 *     description: Delete a user by ID.
 *     security:
 *       - JWTAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Movies:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - genres
 *         - year
 *       properties:
 *         id:
 *           type: integer
 *           description: the id from movie data.
 *         tittle:
 *           type: string
 *           description: the tittle from movies.
 *         genres:
 *           type: string
 *           description: the genres from movies.
 *         year:
 *           type: integer
 *           format: date_year
 *           description: the date movie was released.
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - id
 *         - email
 *         - password
 *         - gender
 *         - role
 *       properties:
 *         id:
 *           type: integer
 *           description: User ID.
 *         email:
 *           type: string
 *           description: User's email address.
 *         password:
 *           type: string
 *           description: User's password.
 *         gender:
 *           type: string
 *           description: User's gender.
 *         role:
 *           type: string
 *           description: User's role (e.g., admin, user).
 */
