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
  // Created prompts for password length between 8 and 128.
  if (passwordLength < 8) {
    alert("Password needs to be at least 8 characters!");
    return null;
  } 
  if (passwordLength > 128) {
    alert("Password must be shorter than 128 characters!")
    return null;
  }
  // Created prompts for whether previous prompt was a number or letter.
  if (Number.isNaN(passwordLength)) {
    alert("Choice needs to be number.")
    return null;
  }
  // Created prompt for lower case.
  var lowerCaseOption = window.confirm("Would you like to include lower case letters?");
  if (lowerCaseOption) {
    passwordOptions += lowerCase;
  }
  // Created prompt for upper case.
  var upperCaseOption = window.confirm("Would you like to include upper case letters?");
  if (upperCaseOption) {
    passwordOptions += upperCase;
  }
  // Created prompt for numbers.
  var numbersOptions = window.confirm("Would you like to include numbers?");
  if (numbersOptions) {
    passwordOptions += numbers;
  }
  // Created prompt for special characters. 
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
