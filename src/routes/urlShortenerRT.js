'use strict'
const urlShortenerBL = require('../bls/urlShortenerBL');
const Util = require('../utils/util');

module.exports = app => {

  app.route("/api/create")
    .post((req, res) => {
      urlShortenerBL.addUrl(req.query, req.body)
        .then(respuesta => Util.mensajeExito(res, "Successfull service response.", 200, respuesta))
        .catch(error => Util.mensajeError(res, error.message));
    });

  // app.route("")
};
