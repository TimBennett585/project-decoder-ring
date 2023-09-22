// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/* immediately return false if shift is <-25, 0 or > 25. Iterate through the message "input".
  Move each [i] + the value of shift. Try to maintain spaces and nonalphabetic symobls. Return in lowercase.
  */


const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (encode === false) {
      shift = shift * -1;
    };
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const length = realAlphabet.length;
    input = input.toLowerCase();
  if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    } let message = "";
    let positionIndex = "";
    for (let i = 0; i < input.length; i++) {
      positionIndex = realAlphabet.indexOf(input[i]);
        if (realAlphabet.indexOf(input[i]) < 0) {
          message += input[i];
        } else if ((shift + positionIndex) > 25) {
          positionIndex = (shift + positionIndex) - length;
          message += realAlphabet[positionIndex];
        } else if((shift + positionIndex) < 0) {
          positionIndex = (shift + positionIndex) + length;
          message += realAlphabet[positionIndex];
        } else {
          positionIndex += shift;
          message += realAlphabet[positionIndex];
        }
    } return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
