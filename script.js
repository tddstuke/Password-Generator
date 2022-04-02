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

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "}",
  "~",
];

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
    return passwordLength;
  } else {
    window.alert("invalid entry. Please try again");
    getpasswordLength();
  }
};

// ask user to confirm using lowercase, uppercase,  numeric and/or special characters
var getLowerCharacters = function () {
  var getLowerCase = window.confirm("Would you like to use lowercase letters?");
  if (getLowerCase) {
    console.log(lowerCase);
    return lowerCase;
  } else {
    return "";
  }
};
var getUpperCharacters = function () {
  var getUpperCase = window.confirm("Would you like to use uppercase letters?");
  if (getUpperCase) {
    console.log(upperCase);
    return upperCase;
  } else {
    return "";
  }
};
var getNumbers = function () {
  var getNumbers = window.confirm("Would you like to use numbers?");
  if (getNumbers) {
    console.log(numbers);
    return numbers;
  } else {
    return "";
  }
};
var getSpecials = function () {
  var getSpecials = window.confirm("Would you like to use Special Characters?");
  if (getSpecials) {
    // console.log(getSpecials());
    return specialCharacters;
  } else {
    return "";
  }
};

// generate random password using returned values

function generatePassword() {
  var charactersLength = getpasswordLength();
  var characters =
    getLowerCharacters() + getUpperCharacters() + getNumbers() + getSpecials();
  console.log(charactersLength);
  characters = characters.replace(/,/g, "");
  console.log(characters);
  var password = "";
  for (i = 0; i < charactersLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length + 1)
    );
    console.log(password);
  }
  return password;
}
