/*
 * start.js
 *
 * imports server module and start server listening on ENV['NSPECT_PORT']
 */

var server = require('./server.js'),
    start = server.server,
    envPort = ENV('INSPECTOR_PORT') || '80';

start.listen(envPort);
console.log('inspector server listening on port: %s', envPort);
