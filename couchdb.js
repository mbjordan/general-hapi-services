'use strict';

const localConfig = require('../config.json');
const couchdb = require('felix-couchdb');

exports.register = function(server, options, next) {
    const client = couchdb.createClient(
        localConfig.port,
        localConfig.host
    );

    server.expose('couch', couchdb);
    server.expose('client', client);
    server.expose('db', client.db('configs'));
    return next();
};

exports.register.attributes = {
    'name': 'couchdbService',
    'version': '0.1.0'
};
