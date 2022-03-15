'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const CuentaSchema = Schema({
        tipo    : { type:   String, default: "ahorros", required: false };
        numero  : { type:   String, required: true },
        fk_banco: { type: Schema.ObjectId, ref: 'banco' },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });
module.exports = Mongoose.model('Cuenta', CuentaSchema);