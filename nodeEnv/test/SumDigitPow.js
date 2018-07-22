var sumDigiPow = require("../Katas/sumDigiPow").sumDigiPow;
var expect = require("chai").expect;

describe("Takes a Number, sums it's digits raised to consecutive powers, returns true if equals number ", () => {
	it("1 - 10, returns an array from 1 - 10", () => {
		expect(sumDigiPow(1, 10)).is.deep.equal([1,2,3,4,5,6,7,8,9,]);
	});
	it("1-100, returns an array [1,2,3,4,5,6,7,8,9,89]", () => {
		expect(sumDigiPow(1, 100)).is.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
	});
	it("10-100, returns an array of [89]", () => {
		expect(sumDigiPow(10, 100)).is.deep.equal([89]);		
	});
	it("90-100, returns empty array", () => {
		expect(sumDigiPow(90, 100)).is.deep.equal([]);				
	});
	it("9-150, returns an array with 135", () => {
		expect(sumDigiPow(90, 150)).is.deep.equal([135]);						
	});
});