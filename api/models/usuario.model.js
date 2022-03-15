'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const UsuarioSchema = Schema({
        cedula      : { type:   String, required: true },
        nombres     : { type:   String, required: true },
        apellidos   : { type:   String, required: true },
        imagen      : { type:   String, required: true },
        correo      : { type:   String, required: false, default: null },
        telefono    : { type:   String, required: false, default: null },
        nacimiento  : { type:   String, required: false, default: null },
        clave       : { type:   String, required: false, default: null },
        fk_roleuser : { type: Schema.ObjectId, ref: 'role' },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });
module.exports = Mongoose.model('usuario', UsuarioSchema);