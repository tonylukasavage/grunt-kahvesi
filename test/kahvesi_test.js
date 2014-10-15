'use strict';

var grunt = require('grunt');

exports.kahvesi = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  basic_test: function(test) {
    test.expect(1);
    test.ok(grunt.file.exists('coverage'));
    //test.ok(grunt.file.exists('coverage/index.html'));
    test.done();
  }
};
