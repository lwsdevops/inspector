/*
 * server.js
 *
 * imports run suites runner and provides web access
 * to main dash and individual checks
 *
 */
var http = require('http');

exports.server = http.createServer( function(req, res) {
  // star handling routes here
  // >> debug
  res.writeHead( 200, { 'Content-type' : 'text/plain' } );
  res.write('You should really do more.');
  res.end('Ok');
  // << debug
}
