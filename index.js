'use strict'

const Mongoose = require('mongoose');

const App = require('./app');

const Port = 3800;

Mongoose.Promise = global.Promise;

Mongoose.connect('mongodb://localhost:27017/ed-store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("DataBase ON");
        App.listen(Port, () => {
            console.log("Servidor corriendo en https://localhost:"+Port);
        });
    })
    .catch(err => console.error(err));