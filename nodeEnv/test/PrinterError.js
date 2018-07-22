var printer = require("../Katas/printerError");
var expect = require("chai").expect;

describe("printerError must contain strings with letters a to m, if they are outside of this range letter is considered an error",() => {
	it("String of length 56 with 3 errors", () => {   
		var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
		expect(printer.printerError(s)).to.be.equal("3/56");
	});
	it("String of 14 with no errors", () =>{
		var s = "aaabbbbhaijjjm";
		expect(printer.printerError(s)).to.be.equal("0/14");
	});
	it("String of 22 with 8 errors", () =>{
		var s = "aaaxbbbbyyhwawiwjjjwwm";
		expect(printer.printerError(s)).to.be.equal("8/22");
	});
});