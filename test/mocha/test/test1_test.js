var should = require('should'),
	test1 = require('../lib/test1');

describe('mocha', function() {

	describe('#test1', function() {

		it('exists', function() {
			should.exist(test1);
			test1.should.be.a.Function;
		});

		it('returns 123', function() {
			test1().should.equal(123);
		});

	});

});