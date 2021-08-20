// Assignment code here

//length 8 - 128, loop
//at least one character type

var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
  ];

var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
  ];

var numbers = ['0','1','2','3','4','5','6','7','8','9'];

//length is 32, excluding the space character
var symbols = ['!', '\"', '#', '$', '%', '&', '\'', '(', ')',
  '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?',
  '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
  ];

//check for valid length
var lengthCheck = function() {
  var promptLength = window.prompt("Please enter a password length, 8 to 128 characters.");
  
  if (promptLength === null || promptLength === "") {
    window.alert("You need to provide a valid number!");
    return lengthCheck();
  }

  //check whitespace
  if (/\s/.test(promptLength)) {
    window.alert("You need to provide a valid number!");
    return lengthCheck();
  }

  //is not a number
  if (isNaN(promptLength) === true) {
    window.alert("You need to provide a valid number!");
    return lengthCheck();
  }

  var promptLength = parseInt(promptLength);
  
  if (promptLength < 8 || promptLength > 128) {
    window.alert("You need to provide a length no less than 8 and no greater than 128.");
    return lengthCheck();
  }
  else {
    return promptLength;
  }
}

//to check for at least one type of characters
var includeLower = false;
var includeUpper = false;
var includeNumber = false;
var includeSymbol = false;
var check = 0;

var confirmCharacters = function () {

  var confirmLower = window.confirm("Include lower case characters?");
  if (confirmLower) {
    includeLower = true;
    check += 1;
  }
  var confirmUpper = window.confirm("Include upper case characters?");
  if (confirmUpper) {
    includeUpper = true;
    check += 1;
  }
  var confirmNumber = window.confirm("Include numbers?");
  if (confirmNumber) {
    includeNumber = true;
    check += 1;
  }
  var confirmSymbol = window.confirm("Include symbols?");
  if (confirmSymbol) {
    includeSymbol= true;
    check += 1;
  }

  //if all false
  if (check === 0) {
    window.alert("Please include at least one type of characters.");
    confirmCharacters();
  }
}

function generatePassword() {
  
  var length = lengthCheck();
  
  confirmCharacters();
  
  //empty array to hold allowed characters
  var include = [];

  //concat allowed character arrays
  if (includeLower === true) {
    include = include.concat(lowers);
  }
  if (includeUpper === true) {
    include = include.concat(uppers);
  }
  if (includeNumber === true) {
    include = include.concat(numbers);
  }
  if (includeSymbol === true) {
    include = include.concat(symbols);
  }

  //empty password
  var password = '';
  
  //loop thru length
  for (var i = 0; i < length; i++) {
    //select random character from include array
    var randomCharacter = Math.floor(Math.random() * include.length);

    //add to password
    password += include[randomCharacter];

  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //reset global
  includeLower = false;
  includeUpper = false;
  includeNumber = false;
  includeSymbol = false;
  check = 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);