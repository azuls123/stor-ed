'use strict'

const Mongoose = require('mongoose');
const Schemma = Mongoose.Schema;
const Moment = require('moment');

    const VarianteSchema = Schemma({
        propiedad   : { type:   String, required: true },
        propiedad2  : { type:   String, required: false, default: '' },
        fk_producto : { type:   Schema.ObjectId, ref: 'producto' },  
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }
    });
module.exports = Mongoose.model('variante', VarianteSchema);