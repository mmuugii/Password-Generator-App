// Assignment Code
// Created variables for all acceptable characters for password.
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var upperCase =  ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['.?!,-_@#$%^&*/:;'];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Created first prompt when Generate is Pressed.
function generatePassword() {
  password = '';
  passwordOptions = '';
  // Created first prompt for user input for numbers in password.
  var passwordLength = parseInt(prompt("Password must be longer than 8 characters and shorter than 128 characters."))
  // length
  if (passwordLength < 8) {
    alert("Password needs to be at least 8 characters!");
    return null;
  } 
  if (passwordLength > 128) {
    alert("Password must be shorter than 128 characters!")
    return null;
  }
  if (Number.isNaN(passwordLength)) {
    alert("Choice needs to be number.")
    return null;
  }
  // Created prompt for window for 1st password event.
  var lowerCaseOption = window.confirm("Would you like to include lower case letters?");
  if (lowerCaseOption) {
    passwordOptions += lowerCase;
  }
  //upper
  var upperCaseOption = window.confirm("Would you like to include upper case letters?");
  if (upperCaseOption) {
    passwordOptions += upperCase;
  }
  //numb
  var numbersOptions = window.confirm("Would you like to include numbers?");
  if (numbersOptions) {
    passwordOptions += numbers;
  }
  //special
  var specialCharOptions = window.confirm("Would you like to include special characters?");
  if (specialCharOptions) {
    passwordOptions += specialChar;
  }
  //random
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * passwordOptions.length);
    password += passwordOptions[index];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
