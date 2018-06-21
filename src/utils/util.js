'use strict'

const Q = require('q');
// const dao = require('../dao/dao');
var moment = require('moment');
// import moment from 'moment';
  // ============================= MENSAJES DE ERROR ============================

const mensajeError = (res, mensajeError, codigo, datos) => {
  const codigoEnviar = codigo ? codigo : 412;
  if(typeof mensajeError === 'object'&&mensajeError.errors)
  {
    mensajeError = (mensajeError.errors.map(function(x){return x.message;})).join("<br/>");
  }
  else if(typeof mensajeError==="string")
  {
    mensajeError = mensajeError.replace(/notNull Violation/g, '');
    mensajeError = mensajeError.replace(/\n: /g, '');
    mensajeError = mensajeError.replace(/Validation error:/g, '');
    mensajeError = mensajeError.replace(/\n/g, '');
    mensajeError = mensajeError.replace(/cannot be null/g, 'es un dato obligatorio');
    mensajeError = mensajeError.replace(/Validation isNumeric failed/g, 'El dato introducido no es un valor numérico válido');
    mensajeError = mensajeError.replace(/llave duplicada viola restricción de unicidad «pago_codigo_deposito_key/g, 'El código de depósito ya existe.');
  }
  else if(mensajeError.message)
  {
    mensajeError = mensajeError.message;
  }

  return res.status(codigoEnviar).
    json({
      finalizado: false,
      mensaje: mensajeError,
      datos: datos ? datos : null,
    });
}

const mensajeExito = (res, mensajeExito, codigo, datos) => {
  const codigoEnviar = codigo ? codigo : 200;
  return res.status(codigoEnviar).
    json({
      // finalizado: true,
      // mensaje: mensajeExito,
      shorthand: datos ? datos : null,
      // fecha: moment().format(),
    });
}
//texto vacio?
const emptyText = (txt) => {
  return txt !== null && txt !==''? txt : ''
}

/**
 * Promesa para iterar un array. El metodo va iterando todos los elementos
 * pero si falla uno se cancela la iteracion y retorna cath de la promesa
 * La funciones que llamen a esta promesa deveran implementar el metodo
 * callbackProcesarItem(item,callbackContinuar,callbackError)
 *
 * @param {type} array El array de elementos a iterar
 * @param {type} callbackProcesarItem la funcion para procesar el item
 * @returns {Promise} Retorna una promesa
 */
const iterarArray = (array, callbackProcesarItem)=>
{
  return new Promise(function (resolve, reject)
  {
    var callbackError = function (error)
    {
      reject(error);
    };
    var indice = 0;
    var LIMITE_ARRAY = array.length;
    if (LIMITE_ARRAY === 0)
    {
      resolve();
      return;
    }

    var arrayResult = new Array();
    var callbakContinuarIteracion = function ()
    {
      indice++;
      if (indice < LIMITE_ARRAY)
      {
        var aa = callbackProcesarItem(array[indice], callbakContinuarIteracion, callbackError);
        arrayResult.push(aa);
      } else
      {
        resolve(arrayResult);
      }
    };
    var cc = callbackProcesarItem(array[indice], callbakContinuarIteracion, callbackError);
    arrayResult.push(cc);
  });
}

/**
 * Funcion para crear/modificar una consulta de peticiones get list. filtrara limit, order, offset
 * @param {Objeto} req Objeto req de Node y que tiene los querys
 * @param {Objeto} obj Objeto consulta. 
 * @return {Objeto} options En caso de que obj no sea nullo se retornara un nuevo objeto
 */
// const filterQuery = require('./../libs/handlers/filter');

module.exports = {
  mensajeError,
  mensajeExito,
  emptyText,
  iterarArray
}
