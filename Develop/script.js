// Assignment code here
var randomPassword = {
};

function generatePassword() {
  var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'];

  return lowers[Math.floor(Math.random() * lowers.length)];
}

function generateUpper() {
  var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'];

  return uppers[Math.floor(Math.random() * uppers.length)];
}

function generateNumber() {
  //length is 10
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  //math.floor rounds down, 9 is stored in number array[9]
  //math.random cannot generate 1

  return numbers[Math.floor(Math.random() * numbers.length)];
}

function generateSymbol() {
  //length is 33
  var symbols = [' ', '!', '\"', '#', '$', '%', '&', '\'', '(', ')',
  '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?',
  '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  
  //to test if all symbol displays
  /*for (var i = 0; i < symbols.length; i++) {
    console.log(symbols[i]);
  }*/

  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);