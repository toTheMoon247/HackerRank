const maxTraillingDiff = require('../maxTraillingDiff');


describe("maxTraillingDiff", () => {
	it('return -1 if there is no trailing', () => {
		const noTrailingExists = [5, 4, 3, 2, 2, 2];
		const result = maxTraillingDiff(noTrailingExists);
		expect(result).toBe(-1);
	});

	it('the pivot is at the last index', () => {
		const input = [5, 4, 5, 10, 1, 4, 8, 6, 11, 12, 13];
		const result = maxTraillingDiff(input);
		expect(result).toBe(7);
	});

	it('the pivot is somewhere in the middle of the array', () => {
		const input = [5, 1, 9, 0, 7];
		const result = maxTraillingDiff(input);
		expect(result).toBe(8);
	});

	it('the array contains negative numbers', () => {
		const input = [5, -1, 7, 0, 9];
		const result = maxTraillingDiff(input);
		expect(result).toBe(9);
	});

	it('the array contains negative numbers', () => {
		const input = [5, -3, 5, 0, 7];
		const result = maxTraillingDiff(input);
		expect(result).toBe(8);
	});

	it('the array contains only negative numbers', () => {
		const input = [-5, -3, -1, -6, -2];
		const result = maxTraillingDiff(input);
		expect(result).toBe(4);
	});
});


