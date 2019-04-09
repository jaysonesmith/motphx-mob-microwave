const { describe, it } = require('mocha');
const expect = require('chai').expect;
const { microwave } = require('../src/microwave');

describe("microwave", function () {
    describe("when no input is provided", function () {
        it("beeps", function () {
            // arrange
            const expected = "beep!"

            // act
            var actual = microwave();

            // assert
            expect(actual).to.equal(expected);
        })
    })
    describe("when 5 is input", function () {
        it("shows 5", function () {
            // arrange
            const input = 5;
            const expected = 5

            // act
            var actual = microwave(input);

            // assert
            expect(actual).to.equal(expected);
        })
    })
    describe("when 60 is input", function () {
        it("should show 1:00", function () {
            // arrange
            const input = 60;
            const expected = "1:00"

            // act
            var actual = microwave(input);

            // assert
            expect(actual).to.equal(expected);
        })
    })
})