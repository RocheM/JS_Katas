var bouncingBall = require("../Katas/bouncingBall").bouncingBall;
var expect = require("chai").expect;

describe("Given paramaters heigth of drop(h), ball bounce (bounce), viewpoint of observer (window), calculates times ball is seen by observer", () => {
	it("Is dropped from 3 meters, window is at 1.5 meters, ball is seen 3 times", () => {
		expect(bouncingBall(3.0, 0.66, 1.5)).to.be.equal(3);
	});
	it("Is dropped from 30 meters, window is at 1.5 meters, ball is seen 15 times", () => {
		expect(bouncingBall(15, 0.66, 1.5)).to.be.equal(15);
	});
});