'use strict';

var fs = require('fs-extra'),
	grunt = require('grunt');

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
		test.expect(7);
		test.ok(grunt.file.exists('coverage'));
		test.ok(grunt.file.exists('coverage/index.html'));
		test.ok(grunt.file.exists('coverage/coverage.json'));
		test.ok(grunt.file.exists('coverage/lib/test1.js.html'));
		test.ok(grunt.file.exists('coverage/lib/test2.js.html'));
		test.ok(grunt.file.exists('coverage/lib/more/test3.js.html'));
		test.ok(!grunt.file.exists('coverage/lib/more/test4.js.html'));
		test.done();
	},
	multiple_include_test: function(test) {
		test.expect(7);
		test.ok(grunt.file.exists('coverage/multiple_include_test'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/lcov.info'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/coverage.json'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/lcov-report/lib/test1.js.html'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/lcov-report/lib/test2.js.html'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/lcov-report/lib/more/test3.js.html'));
		test.ok(grunt.file.exists('coverage/multiple_include_test/lcov-report/lib/more/test4.html'));
		test.done();
	},
};
