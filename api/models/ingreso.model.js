'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const IngresoSchema = Schema({
        numero      : { type:   String, required: true },
        fecha       : { type:   String, required: false, default: Moment().unix() },
        fk_usuario  : { type: Schema.ObjectId, ref: 'usuario' },
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
module.exports = Mongoose.model('ingreso', IngresoSchema);