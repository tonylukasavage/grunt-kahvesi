var should = require('should'),
	test4 = require('../../lib/more/test4');

describe('mocha', function() {

	describe('#test4', function() {

		it('exists', function() {
			should.exist(test4);
			test4.should.be.a.Function;
		});

		it('returns 456', function() {
			test4().should.equal(456);
		});

	});

});