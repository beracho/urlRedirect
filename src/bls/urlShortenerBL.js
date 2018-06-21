'use strict'
const Q = require('q');
const UrlStorage = require('../utils/urlStorage');

const addUrl = (query, body, models) => {
  const deferred = Q.defer();
  let response = ''
  if (body.shorthand) {
    // Assign shorthand
      response = UrlStorage.set(body.shorthand, body.original_url)
  } else {
    // Generate shorthand
    response = 'short' + extractHostname(body.original_url)
    let counter = 1
    let baseResponse = response
    while (UrlStorage.exist(response)) {
      response = baseResponse + '_' + counter
      counter++
    }
  }
  if (response !== '') {
    deferred.resolve(response)

  } else {
    deferred.reject('Short hand allready used')
  }
  return deferred.promise;
};

function extractHostname(url) {
  var hostname;

  if (url.indexOf("://") > -1) {
    hostname = url.split('/')[2];
  }
  else {
    hostname = url.split('/')[0];
  }

  hostname = hostname.split(':')[0];
  hostname = hostname.split('?')[0];
  hostname = hostname.split('.')[0];

  return hostname;
}

module.exports = {
  addUrl
}
