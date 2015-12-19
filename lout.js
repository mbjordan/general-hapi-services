'use strict';

// npm install --save ramda inert vision lout

const R = require('ramda');

const logErr = function(err) {
    if (err) console.error(err);
};

const getLoutPluginsDef = R.always([
    require('inert'),
    require('vision'),
    require('lout')
]);

exports.register = function(server, options, next) {
    server.register(getLoutPluginsDef(), logErr);
    return next();
};

exports.register.attributes = {
    'name': 'loutService',
    'version': '0.1.0'
};
