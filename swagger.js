'use strict';

const R = require('ramda');

const swaggerOptions = R.always({
    'info': {
        'title': 'API Documentation',
        'version': require('../package.json').version
    }
});

const logErr = function(err) {
    if (err) console.log(err);
};

const getSwaggerPluginsDef = R.always([
    require('inert'),
    require('vision'),
    {
        'register': require('hapi-swagger'),
        'options': swaggerOptions()
    }
]);

exports.register = function(server, options, next) {
    server.register(getSwaggerPluginsDef(), logErr);
    return next();
};

exports.register.attributes = {
    'name': 'swaggerService',
    'version': '0.1.0'
};
