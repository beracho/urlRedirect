const
  _ = require('lodash'),
  qs = require('./parsers/qs');

module.exports = filter;

/**
 * Funcion para crear/modificar una consulta de peticiones get list. filtrara limit, order, offset
 * @param {Objeto} query Objeto req.query de Node, son los querys
 * @param {Objeto} obj Objeto consulta. 
 * @return {Objeto} options En caso de que obj no sea nullo se retornara un nuevo objeto
 */
function filter(query, obj) {
  const options = obj || {};
  options.limit = qs.limit(query.limit) || 10;
  options.offset = (query.limit * ((query.page || 1) - 1)) || 0;
  options.order = qs.sort(query.order);
  if (!obj) {
    return options;  
  }
}
