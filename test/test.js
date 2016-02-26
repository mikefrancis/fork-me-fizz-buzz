import assert from 'assert';
import fizzbuzz from './../src/index';

describe('Fizz Buzz', () => {
	it('should return a number for non-multiples of three or five', () => {
		assert.equal(1, fizzbuzz(1));
		assert.equal(2, fizzbuzz(2));
	});

	it('should return fizz for multiples of three', () => {
		assert.equal('fizz', fizzbuzz(3));
	});

	it('should return buzz for multiples of five', () => {
		assert.equal('buzz', fizzbuzz(5));
	});

	it('should return fizzbuzz for multiples of three and five', () => {
		assert.equal('fizzbuzz', fizzbuzz(15));
	});
});
