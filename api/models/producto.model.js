'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const ProductoSchema = Schema({
        name        : { type:   String, required: true },
        codigo      : { type:   String, required: true },
        descripcion : { type:   String, required: true },
        medidas     : { type:   String, required: true },
        costo       : { type:   Number, required: true },
        material    : { type:   String, required: true },
        imagen      : { type:   [String], required: false, default: [] },
        fk_marca    : { type:   Schema.ObjectId, ref: 'marca' },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });

module.exports = Mongoose.model('producto', ProductoSchema);

// _id, codigo, nombre, marca, descripcion, tamanio[quitar], materiales, fk_marca
// necesito una variante para incluir, con su propio codigo.