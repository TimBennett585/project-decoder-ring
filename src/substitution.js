// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


/* immediately return false if there is no alphabet of if it is not exactly 26 characters long. Iterate through the "new alphabet" to assign those characters to the input message. Can include
special characters. */ 

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    let message = "";
    let positionIndex = "";
    let codedIndex = "";
    for (let i = 0; i < alphabet.length; i ++) {
        if(alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i]) ) {
          return false;
        }
    };
    for (let i = 0; i < input.length; i++) {
      positionIndex = realAlphabet.indexOf(input[i]);
      codedIndex = alphabet.indexOf(input[i]);
        if (input[i] === " ") {
          message += " ";
        } else if (encode === false) {
          message += realAlphabet[codedIndex];
        } else {
          message += alphabet[positionIndex];
        }
    } return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
