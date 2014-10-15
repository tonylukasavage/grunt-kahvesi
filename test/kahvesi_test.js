'use strict';

var grunt = require('grunt');

exports.kahvesi = {
  single_test: function(test) {
    test.expect(4);
    test.ok(grunt.file.exists('coverage'));
    test.ok(grunt.file.exists('coverage/index.html'));
    test.ok(grunt.file.exists('coverage/coverage.json'));
    test.ok(grunt.file.exists('coverage/lib/test1.js.html'));
    test.done();
  },
  multiple_test: function(test) {
    test.expect(6);
    test.ok(grunt.file.exists('coverage'));
    test.ok(grunt.file.exists('coverage/index.html'));
    test.ok(grunt.file.exists('coverage/coverage.json'));
    test.ok(grunt.file.exists('coverage/lib/test1.js.html'));
    test.ok(grunt.file.exists('coverage/lib/test2.js.html'));
    test.ok(grunt.file.exists('coverage/lib/more/test3.js.html'));
    test.done();
  },
};
