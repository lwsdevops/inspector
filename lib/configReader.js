/* *
 * lib/suiteReader.js
 *
 * reads test suite configs from suites dir
 * allows for application reloading on config change
 *
 * */
var fs = require('fs');

var config = function(filePath) {
  /* *
   * accepts a path to a file and reads the contents
   * returns contents as a hash
   *
   * :param: filePath(str): path to config file
   *
   * */
  if ( fs.existsSync( filePath ) ) {
    return JSON.parse( fs.readFileSync(filePath, 'utf8') );
  }
  // TODO: replace with logger
  console.warn('File does not exist: %s', filePath)
  return
}

exports.suites = function(configDir) {
  //
  // reads list of test suites
  //
  var configDir = configDir || 'suites';
  if ( fs.existsSync( configDir ) ) {
    console.log( fs.readdirSync(configDir) );
  }
  return
}

exports.appConfig = function(filePath) {
  // read application config
  return config(filePath);
}

// export for unit testing
exports.config = config;
