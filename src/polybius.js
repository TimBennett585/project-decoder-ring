// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
  const polybiusSquare = [
    [1,"a","f","l","q","v"],
    [2,"b","g","m","r","w"],
    [3,"c","h","n","s","x"],
    [4,"d","i/j","o","t","y"],
    [5,"e","k","p","u","z"],
  ]; 
    let lower = input.toLowerCase();
    if (encode === false && lower.replace(/\s/g, "").length % 2 !== 0) {
      return false;
    }
  let result = "";
  let numberColumn = "";
  let numberRow = "";
  if (encode === true) {
    for (let i = 0; i < lower.length; i++) {
    for (let j = 0; j < polybiusSquare.length; j++) {
      let row = polybiusSquare[j];
      if (lower[i] === " ") {
        result += " ";
        break;
      } else if (lower[i] === "j" || lower[i] === "i") {
        result += "42";
        break;
      }
        else if (row.find((place) => place === lower[i])) {
          numberRow = j + 1;
          numberColumn = row.indexOf(lower[i]);
          result += `${numberRow}${numberColumn}`;
          break;
        }
    }
  }
} else {
  for (let i = 0; i < lower.length; i+=2) {
    let realLetter = "";
    let secondPosition = "";
    if (lower[i] === " ") {
      result += " ";
      i++;
    }
    numberRow = lower[i];
    numberColumn = lower[i+1];
    secondPosition = polybiusSquare[numberRow - 1];
    realLetter = secondPosition[numberColumn];
    result += realLetter;
  }
}
 return result;
} 

  return {
    polybius,
  };

})();

module.exports = { polybius: polybiusModule.polybius };
