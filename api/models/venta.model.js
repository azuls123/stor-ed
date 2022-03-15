'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const VentaSchema = Schema({
        total       : { type:   Number, required: true },
        fecha       : { type:   String, required: false, default: Moment().unix() },
        codigo      : { type:   String, required: true },
        fk_vendedor : { type: Schema.ObjectId, ref: 'usuario' },
        fk_cliente  : { type: Schema.ObjectId, ref: 'usuario' },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });
module.exports = MOngoose.model('venta', VentaSchema);