var checkDiff = require("../Katas/arrayDiff").checkDiff;
var expect = require("chai").expect;

describe("difference function, which subtracts one list from another and returns the result. Should Remove values from list a, which are present in list b.", () => {
	it("a was [], b was [4,5], expected []", () => {
		expect(checkDiff([],[4,5])).to.be.deep.equal([]);
	});
	it("a was [1,2,3,4,5,6], b was [4,5,6], expected [1,2,3]", () => {
		expect(checkDiff([1,2,3,4,5,6],[4,5,6])).to.be.deep.equal([1,2,3]);
	});
	it("a was [1,2], b was [1], expected [2]", () => {
		expect(checkDiff([1,2],[1])).to.be.deep.equal([2]);
	});
});
