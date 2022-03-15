'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const CuentaProveedorSchema = Schema({
        fk_cuenta   : { type: Schema.ObjectId, ref: 'cuenta' },
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
module.exports = Mongoose.model ('cuenta-proveedor', CuentaProveedorSchema);