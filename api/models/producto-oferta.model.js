'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const ProductoOfertaSchema = Schema({
        descripcion : { type:   String, required: true },
        fk_oferta   : { type: Schema.ObjectId, ref: 'oferta' },
        fk_producto : { type: Schema.ObjectId, ref: 'producto' },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });
module.exports = Mongoose.model('producto-oferta', ProductoOfertaSchema);