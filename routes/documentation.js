require('dotenv').config({path : '../.env'})
const secret_key = process.env.SECRET_KEY || 'koderahasianegara'

const options = {
    definition : {
        openapi : "3.0.0",
        info : {
            title : "express API with swagger",
            version : "0.1.0",
            description :
            "This API provides CRUD (Create, Read, Update, Delete) operations for managing data related to both movies and users. It allows you to interact with and manipulate information about movies, as well as user profiles, offering a comprehensive solution for data management and user interaction within the system, accessible to authorized users with valid JWT tokens."
        },
        servers : [
            {
                url : "http://localhost:3000",
                description : "development server"
            },
        ],
        components: {
            securitySchemes: {
                JWTAuth: { 
                    type: 'http',
                    scheme: 'bearer',
            },
            },
        },
          security: [ 
            {
            JWTAuth: [],
            },
        ],
    },
    apis : ['./routes/*']
}

module.exports = {
    options,

}