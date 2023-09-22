// Write your tests here!

//     const alphabet = "ndsylijumxcrhepvagzbqtfowk"; THIS IS THE MASTER CYPHER (26 long, no repeats)

const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const input = "test message";
    const alphabet = "dsylijumxcrhepvagzbqtfo";
    const expected = false;
    const actual = substitution(input, alphabet, encode = true);
    expect(actual).to.equal(expected);
  });

  it("should return false if there are any duplicate letters in the alphabet", () => {
    const input = "test message";
    const alphabet = "dsylijumxcfhepvagzbqtfowk";
    const expected = false;
    const actual = substitution(input, alphabet, encode = true);
    expect(actual).to.equal(expected);
  }); 

  it("should return false if there is no alphabet provided", () => {
    const input = "test message";
    const expected = false;
    const actual = substitution(input, encode = true);
    expect(actual).to.equal(expected);
  });

  it("correctly translates the given phrase, based on the alphabet given to the function", () => {
    const input = "practice";
    const alphabet = "ndsylijumxcrhepvagzbqtfowk";
    const expected = "vgnsbmsl";
    const actual = substitution(input, alphabet, encode = true);
    expect(actual).to.eql(expected);
  });

  it("should maintain spaces, in the message, before and after encoding", () => {
    const input = "practice practice";
    const alphabet = "ndsylijumxcrhepvagzbqtfowk";
    const expected = "vgnsbmsl vgnsbmsl";
    const actual = substitution(input, alphabet, encode = true);
    expect(actual).to.eql(expected);
  });

  it("should maintain spaces, in the message, before and after decoding", () => {
    const input = "vgnsbmsl vgnsbmsl";
    const alphabet = "ndsylijumxcrhepvagzbqtfowk";
    const expected = "practice practice";
    const actual = substitution(input, alphabet, encode = false);
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters", () => {
    const input = "Practice";
    const alphabet = "ndsylijumxcrhepvagzbqtfowk";
    const expected = "vgnsbmsl";
    const actual = substitution(input, alphabet, encode = true);
    expect(actual).to.eql(expected);
  });
});