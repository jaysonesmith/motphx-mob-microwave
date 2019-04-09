const {describe, it} = require('mocha');
const expect = require('chai').expect;
const microwave = require('../src/microwave');

describe("microwave", function() {
    describe("when start is pressed and no time is specified", function() {
        it("beeps", function() {
            // arrange
            const expected = "beep!"

            // act
            var actual = '';

            // assert
            expect(actual).to.equal(expected);
        })
    })
})