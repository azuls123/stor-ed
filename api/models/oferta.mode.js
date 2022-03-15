'use strict'

const Mongoose = require ('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const OfertaSchema = Schema({
        nombre      : { type:   String,     required: true },
        valor       : { type:   Number,     required: true },
        porcentaje  : { type:   Boolean,    required: true },
        inicio      : { type:   String,     required: true },
        fin         : { type:   String,     required: true },
        Created     : {
            By      : { type: Schema.ObjectId, ref: 'usuario' },
            At      : { type: String, default: Moment().unix() }
        },
        Updated     : {
            By      : { type: Schema.ObjectId, ref: 'usuario' },
            At      : { type: String, default: Moment().unix() }
        }
    });
module.exports = Mongoose.model('oferta', OfertaSchema);