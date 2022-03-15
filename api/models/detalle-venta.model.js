'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const DetalleVentaSchema = Schema({
        cantidad    : { type:   Number, required: true },
        costo       : { type:   Number, required: true },
        total       : { type:   Number, required: true },
        fk_producto : { type: Schema.ObjectId, ref: 'producto' },
        fk_venta    : { type: Schema.ObjectId, ref: 'venta' },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });
module.exports = Mongoose.model('detalle-venta', DetalleVentaSchema);