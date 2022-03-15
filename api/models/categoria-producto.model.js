'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const CategoriaProductoSchema = Schema({
        codigo          : { type:   String, required: true },
        fk_categoria    : { type: Schema.ObjectId, ref: 'categoria' },
        fk_producto     : { type: Schema.ObjectId, ref: 'producto' },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });
module.exports = Mongoose.model('categoria-producto', CategoriaProductoSchema)