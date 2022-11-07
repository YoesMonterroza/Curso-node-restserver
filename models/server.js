

const cors    = require('cors')
const express = require('express');
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();

        //rutas de mi aplicación
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());
        
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port);
    }
}

module.exports = Server;