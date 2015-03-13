'use strict';

var fs = require('fs-extra'),
	grunt = require('grunt');

exports.kahvesi = {
	single_test: function(test) {
		test.expect(5);
		test.ok(grunt.file.exists('coverage'));
		test.ok(grunt.file.exists('coverage/coverage.json'));
		test.ok(grunt.file.exists('coverage/lcov.info'));
		test.ok(grunt.file.exists('coverage/lcov-report'));
		test.ok(grunt.file.exists('coverage/lcov-report/index.html'));
		test.done();
	},
	multiple_test: function(test) {
		test.expect(11);
		test.ok(grunt.file.exists('coverage'));
		test.ok(grunt.file.exists('coverage/coverage.json'));
		test.ok(grunt.file.exists('coverage/lcov.info'));
		test.ok(grunt.file.exists('coverage/lcov-report'));
		test.ok(grunt.file.exists('coverage/lcov-report/index.html'));
		test.ok(grunt.file.exists('coverage/lcov-report/lib'));
		test.ok(grunt.file.exists('coverage/lcov-report/lib/index.html'));
		test.ok(grunt.file.exists('coverage/lcov-report/lib/test1.js.html'));
		test.ok(grunt.file.exists('coverage/lcov-report/lib/test2.js.html'));
		test.ok(grunt.file.exists('coverage/lcov-report/lib/more/index.html'));
		test.ok(grunt.file.exists('coverage/lcov-report/lib/more/test3.js.html'));
		test.done();
	},
	multiple_include_test: function(test) {
		test.expect(7);
		test.ok(grunt.file.exists('coverage/multiple_include_test'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/coverage.json'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/index.html'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/lib/test1.js.html'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/lib/test2.js.html'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/lib/more/test3.js.html'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/lib/more/test4.html'));
		test.done();
	}
};
