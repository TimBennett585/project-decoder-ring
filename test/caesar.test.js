// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift value is equal to 0", () => {
    const input = "test message";
    const shift = 0;
    const expected = false;
    const actual = caesar(input, shift, encode = true);
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is less than -25", () => {
    const input = "test message";
    const shift = -30;
    const expected = false;
    const actual = caesar(input, shift, encode = true);
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is greater than 25", () => {
    const input = "test message";
    const shift = 50;
    const expected = false;
    const actual = caesar(input, shift, encode = true);
    expect(actual).to.equal(expected);
  });

  it("should return false if there is no shift value given", () => {
    const input = "test message";
    const expected = false;
    const shift = null;
    const actual = caesar(input, shift, encode = true);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other nonalphabetic symbols", () => {
    const input = "test test";
    const expected = "vguv vguv";
    const shift = 2;
    const actual = caesar(input, shift, true);
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters", () => {
    const input = "TEST";
    const expected = "vguv";
    const shift = 2;
    const actual = caesar(input, shift, true);
    expect(actual).to.eql(expected);
  });

  it("should handle shifts that go past the end of the alphabet", () => {
    const input = "test";
    const expected = "bmab";
    const shift = 8;
    const actual = caesar(input, shift, true);
    expect(actual).to.eql(expected);
  }); 

});