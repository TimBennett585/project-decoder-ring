// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");
// this was just copy-paste from caesar.test to be lazy

describe("polybius", () => {
  it("when encoding, it translates the letters 'i' and 'j' to 42", () => {
    const input = "i";
    const expected = "42";
    const actual = polybius(input, encode = true);
    expect(actual).to.equal(expected);
  });

  it("when decoding, it translates 42 to 'i/j'", () => {
    const input = "42";
    const expected = "i/j";
    const actual = polybius(input, encode = false);
    expect(actual).to.equal(expected);
  });

  it("ignores capital letters", () => {
    const input = "J";
    const expected = "42";
    const actual = polybius(input, encode = true);
    expect(actual).to.equal(expected);
  });

  it("maintains spaces in the message, before and after encoding or decoding", () => {
    const input = "test message";
    const expected = "44513444 23513434112251";
    const actual = polybius(input, encode = true);
    expect(actual).to.equal(expected);
  });
}); 