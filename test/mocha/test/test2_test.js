var should = require('should'),
	test2 = require('../lib/test2');

describe('mocha', function() {

	describe('#test2', function() {

		it('exists', function() {
			should.exist(test2);
			test2.should.be.a.Function;
		});

		it('returns 123', function() {
			test2().should.equal(123);
		});

	});

});