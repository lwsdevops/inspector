/* *
 * 01-test_configReader.js
 *
 * unit tests for ../lib/configReader.js
 *
 * */
var configReader = require('../lib/configReader.js')
  , assert = require('assert');

describe('configReader', function() {

  it('should be null', function(done) {
    config = configReader.appConfig(null)
    assert.equal(config,null);
    done();
  });

  it('should find the config file', function(done) {
    config = configReader.appConfig('config/inspector.json');
    assert(JSON.stringify(config).length > 0, JSON.stringify(config));
    done();
  });

  it('should log list of file in suites dir', function(done) {
    suites = configReader.suites();
    done();
  });

});
