/*
 * grunt-kahvesi
 * https://github.com/tonylukasavage/grunt-kahvesi
 *
 * Copyright (c) 2014 Tony Lukasavage
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec,
  path = require('path');

var BIN = path.join(__dirname, '..', 'node_modules', '.bin');

module.exports = function(grunt) {

  grunt.registerMultiTask('kahvesi', 'grunt plugin for generating istanbul + mocha coverage reports', function() {
    var done = this.async(),
      cmd = '"' + BIN + '/istanbul" cover --report html "' + BIN + '/_mocha" -- -R min ' +
        this.filesSrc.reduce(function(p,c) { return (p || '') + ' "' + c + '" '; });

    grunt.log.writeln(cmd);
    exec(cmd, function(err, stdout, stderr) {
      if (err) { grunt.fail.fatal(err); }
      if (/No coverage information was collected/.test(stdout)) {
        grunt.fail.warn('No coverage information was collected. Report not generated.');
      } else {
        grunt.log.ok(stdout);
        //grunt.log.ok('test coverage report generated to "./coverage/index.html"');
      }
      done();
    });
  });

};
