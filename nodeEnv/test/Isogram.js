var isIsogram = require("../Katas/isogram").isIsogram;
var expect = require("chai").expect;

describe("An isogram is a word that has no repeating letters, consecutive or non-consecutive.", () => {
	it("Dermatoglyphics: Is Isogram, retrurns true", () => {
		expect(isIsogram("Dermatoglyphics")).is.true;
	}); 
	it("isogram: Is Isogram, retrurns true", () => {
		expect(isIsogram("isogram")).is.true;		
	});
	it("Blank String, is technically an Isogram. Returns True", () => {		
		expect(isIsogram("")).is.true;
	});
	
	it("isIsogram: Not Isogram, returns false", () => {
		expect(isIsogram("isIsogram")).is.false;
	});
	it("aba: Not Isogram, returns false", () => {
		expect(isIsogram("aba")).is.false;
	});
	it("moOse: Not Isogram, returns false", () => {
		expect(isIsogram("moOse")).is.false;		
	});
});