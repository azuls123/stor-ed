'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const RepresentanteSchema = Schema({
        nombres     : { type:   String, required: true },
        telefono    : { type:   String, required: false },
        fk_proveedor: { type: Schema.ObjectId, ref: 'proveedor' },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });
module.exports = Mongoose.model('representante'. RepresentanteSchema);