var should = require('should'),
	test3 = require('../../lib/more/test3');

describe('mocha', function() {

	describe('#test3', function() {

		it('exists', function() {
			should.exist(test3);
			test3.should.be.a.Function;
		});

		it('returns 123', function() {
			test3().should.equal(123);
		});

	});

});