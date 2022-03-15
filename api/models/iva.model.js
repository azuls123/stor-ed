'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Moment = require('moment');

    const IvaSchema = Schema({
        valor : { type:  Number, default: 12, required: true },
        fecha : { type: String, default: Moment().unix(), required: true },
        created     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        },
        updated     : {
            by      : { type: Schema.ObjectId, ref: 'usuario' },
            at      : { type: String, default: Moment().unix() }
        }

    });
module.exports = Mongoose.model('iva', IvaSchema);