const { describe, it } = require('mocha');
const expect = require('chai').expect;
const { microwave } = require('../src/microwave');

describe("microwave", function () {
    describe("when start is pressed and no time is specified", function () {
        it("beeps", function () {
            // arrange
            const expected = "beep!"

            // act
            var actual = microwave();

            // assert
            expect(actual).to.equal(expected);
        })
    })
    describe("when start is pressed and 5 seconds is specified", function () {
        it("beeps", function () {
            // arrange
            const input = 5;
            const expected = 5

            // act
            var actual = microwave(input);

            // assert
            expect(actual).to.equal(expected);
        })
    })
})