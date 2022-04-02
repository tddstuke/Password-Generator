// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ask user to pick a number between 8 and 128 to use as password length
var getpasswordLength = function () {
  var passwordLength = prompt("pick a password length between 8 and 128");
  console.log("length is " + passwordLength);
  if (passwordLength > 7 && passwordLength < 129) {
    return true;
  } else {
    window.alert("invalid entry. Please try again");
    getpasswordLength();
  }
};
getpasswordLength();

// ask user to confirm using lowercase, uppercase,  numeric and/or special characters

function generatePassword() {}

// write arrays for lowercase, upper case, numbers, and special characters

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
