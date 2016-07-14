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

module.exports = function(grunt) {

	grunt.registerMultiTask('kahvesi', 'grunt plugin for generating istanbul + mocha coverage reports', function() {
		var done = this.async(),
			options = this.options({ report: 'lcov' }),
			files = this.filesSrc.reduce(function(p,c) { return (p || '') + ' "' + c + '" '; }),
			excludes = ['**/node_modules/**', '**/test/mocha/test/**'],
			args = process.env.KAHVESI_TEST ? '--no-default-excludes -x ' + quote(excludes.join(' ')) : '',
			reporter = options.reporter || 'min';

		delete options.reporter;
		var opts = Object.keys(options).map(function(key) {
			var opt, value = options[key];
			opt = key.length === 1 ? '-' + key : '--' + key;
			value = value === true || value === false ? '' : '"' + value + '"';
			return opt + ' ' + value;
		}).join(' ');

		var cmd = format('istanbul cover %s %s _mocha -- -R %s %s', opts, args, reporter, files),
			dir1 = path.join(__dirname, '..', '.bin'),
			dir2 = path.join(__dirname, '..', '..', '.bin'),
			env = process.env;
		env.PATH = dir1 + path.delimiter + dir2 + path.delimiter + env.PATH;

		grunt.log.debug(cmd);
		exec(cmd, { env: env }, function(err, stdout, stderr) {
			if (options.verbose && stdout) { grunt.log.write(stdout); }
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
