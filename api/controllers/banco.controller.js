'use strict'

const Banco = require('../models/banco.model');
const Moment = require('moment');
const Pagination = require('../services/pagination.service');
const { find } = require('../models/banco.model');
// Funcion crear
function create(req, res) {

    const params = req.body;
    let banco = new Banco();

    if (checkData(params)) {
        banco.nombre = params.nombre;
        banco.codigo = params.codigo;
        banco.created.by = params.usuario.id;
        banco.created.at = Moment().unix();
        banco.save((error, saved) => {
            if (error) return res.status(500).send({Message: 'error al intentar guardar'});
            if (saved && saved != null) return res.status(201).send({Message: 'Guardado!'}); 
            else return res.status(404).send({Message: 'No hay respuesta'});
        })
    } else {
        return res.status(500).send({Message: 'Denegado'});
    }

}

function read(req, res) {
    // averiguar como optmizar esto con el manejo de DOM
    let PaginationData = req.body.PaginationData;
    let Filters = req.body.Filters;
    let Query = Banco.find().populate({path: 'Created.By Updated.By'});
    
    (!Filters.searchText || Filters.searchText == null || Filters.searchText == undefined) ? Filters.searchText = '': null;
    Find(Query, Filters).then((Status, Message, Result) => {
        let Raw = [];
        if (Status == 200) {
            if (PaginationData.raw && PaginationData.raw == true) Raw = Result;
            return res.status(200).send({
                Message: Message,
                Bancos: Pagination.paginate(Result, PaginationData),
                Raw: Raw
            })
        } else {
            return res.status(Status).send({
                Message: Message
            })
        }
    })
    // Banco.find().populate({path: 'Created.By Updated.By'}).exec((error, respose) => {
    //     if (error) return res.status(500).send({Message: 'Error al procesar la peticion'});
    //     if (!response) return res.status(404).send({Message: 'El servidor no responde o respondion null'});
    //     return res.status(200).send({
    //         Message: (response),
    //         Collection: 'ss'
    //     })
    // })
}


async function Find(Query, Filters) {
    try {
        const List = await Query.sort('_id').exec();
        let Filtered = [];
        for (const item of List) {
            const nombre = item.nombre;
            const codigo = item.codigo;
    
            let termino = '';
    
            switch (Filters.type.toLowerCase()) {
                case 'nombre':
                    termino = nombre;
                    break;
                case 'codigo':
                    termino = codigo;
                    break;
                default:
                    termino = codigo + nombre;
                    break;
            }
    
            if (termino.indexOf(Filters.searchText.toLowerCase().replace(/[^\w]/gi, '')) > -1) Filtered.push(item);
        }
        return 200, 'Correcto', Filtered;
    } catch (error) {
        return 500, error, [];
    }
}


function checkData(parametros) {
    let complete = false;
    (parametros.usuario.id && parametros.nombre && parametros.codigo) ? complete = true: complete = false;
    return complete;
}