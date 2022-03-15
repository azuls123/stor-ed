'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const CategoriaSchema = Schema({
        nombre      : { type:   String, required: true },
        codigo      : { type:   String, required: true },
        descripcion : { type:   String, required: true },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });
module.exports = Mongoose.model('categoria', CategoriaSchema);