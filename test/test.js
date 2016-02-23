var assert = require('assert');
var fizzbuzz = require('./../src/index');

describe('Fizz Buzz', function () {
	it('should return a number for non-multiples of three or five', function () {
		assert.equal(1, fizzbuzz(1));
		assert.equal(2, fizzbuzz(2));
	});

	it('should return fizz for multiples of three', function () {
		assert.equal('fizz', fizzbuzz(3));
	});

	it('should return buzz for multiples of five', function () {
		assert.equal('buzz', fizzbuzz(5));
	});

	it('should return fizzbuzz for multiples of three and five', function () {
		assert.equal('fizzbuzz', fizzbuzz(15));
	});
});
