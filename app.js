'use strict'

const Express = require('express');
const BodyParser = require('body-parser');


const App = Express();

const path = require('path');

// middlewares
    // body parser starts
    App.use(BodyParser.urlencoded({extended: false}));
    App.use(BodyParser.json());
    // body parser ends

    // configuraciones
    // Configuracion para intercambio de recursos de origenes cruzados CORS //
    App.use((req, res, next) => {
        // Configuracion de Control de Acceso a cualquiera //
        res.header('Access-Control-Allow-Origin', '*');
        // Configuracion de control de Cabeceras, definicion de tipos //
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        // Configuracion de control de Metodos accesibles (Api-Rest[GET, POST, PUT, DELETE, OPTIONS]) //
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        // Acceso final a los metodos de Api Rest por medio de las cabeceras //
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
    

// cors


App.get('/', (req, res) => {
    res.status(200).send({
        message: 'Servidor corriendo Correctamente!'
    })
});

module.exports = App;