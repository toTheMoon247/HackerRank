const sortRomanNames = require('../sortRomanNames');

describe("sortRomanNames", () => {
	it("gets an empty array", () => {
		const input = [];
		const result = sortRomanNames(input);
		expect(result).toBe('');
	})

	it("gets an unsorted input", () => {
		const input = [
		  "Margaret VI",
		  "Boris I",
		  "David III",
		  "Boris V",
		  "Margaret I",
		  "Tony II",
		  "Boris III",
		];

		const result = sortRomanNames(input);
		expect(result).toBe('Boris 1 Boris 3 Boris 5 David 3 Margaret 1 Margaret 6 Tony 2');
	});

	it("gets an unsorted input", () => {
		const input = ["Pierre V", "Henri I", "Pierre II"];
		const result = sortRomanNames(input);
		expect(result).toBe('Henri 1 Pierre 2 Pierre 5');
	});

	it("gets a sorted input", () => {
		const input = ["Henri I", "Pierre II", "Pierre V"];
		const result = sortRomanNames(input);
		expect(result).toBe('Henri 1 Pierre 2 Pierre 5');
	})
});

