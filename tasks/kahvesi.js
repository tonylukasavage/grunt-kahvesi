/*
 * grunt-kahvesi
 * https://github.com/tonylukasavage/grunt-kahvesi
 *
 * Copyright (c) 2014 Tony Lukasavage
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec,
	format = require('util').format,
	path = require('path');

var BIN = path.join(__dirname, '..', 'node_modules', '.bin');

module.exports = function(grunt) {

	grunt.registerMultiTask('kahvesi', 'grunt plugin for generating istanbul + mocha coverage reports', function() {
		var done = this.async(),
			options = this.options({ report: 'lcov' }),
			istanbul = quote(BIN + '/istanbul'),
			mocha = quote(BIN + '/_mocha'),
			files = this.filesSrc.reduce(function(p,c) { return (p || '') + ' "' + c + '" '; }),
			excludes = ['**/node_modules/**', '**/test/mocha/test/**'],
			args = process.env.KAHVESI_TEST ? '--no-default-excludes -x ' + quote(excludes.join(' ')) : '';

		var opts = Object.keys(options).map(function(key) {
			var opt, value = options[key];
			opt = key.length === 1 ? '-' + key : '--' + key;
			value = value === true || value === false ? '' : '"' + value + '"';
			return opt + ' ' + value;
		}).join(' ');

		var cmd = format('%s cover %s %s %s -- -R min %s', istanbul, opts, args, mocha, files);
		grunt.log.debug(cmd);
		exec(cmd, function(err, stdout, stderr) {
			if (err) { grunt.fail.fatal(err); }
			if (/No coverage information was collected/.test(stdout)) {
				grunt.fail.warn('No coverage information was collected. Report not generated.');
			} else {
				grunt.log.ok('test coverage report generated');
			}
			done();
		});
	});

};

function quote(str) { return '"' + str + '"'; }
