var lowercase = [
  'a',
  'b',
  'c',
  'd'
]

var uppercase = [
  'A',
  'B',
  'C',
  'D'
]

var numbers = [
  '0',
  '1',
  '2',
  '3'
]

var specials = [
  '!',
  '@',
  '#',
  '$'
]

function askPassword() {
  var length = parseInt(
    prompt('How many characters would you like your password to be?')
  )
  if(length < 8) {
    alert('Password must be longer than 8 characters')
    return null;
  }
  if(length > 128) {
    alert('Password must be shorter than 128 characters')
    return null;
  }

  var containSpecials = confirm(
    'Click ok to have special characters in your password.'
  )

  var containNumbers = confirm(
    'Click ok to have numbers in your password.'
  )

  var containLowercase = confirm(
    'Click ok to have lowercase characters in your password.'
  )

  var containUppercase = confirm(
    'Click ok to have uppercase characters in your password.'
  )

  if(containSpecials === false && containNumbers === false && containLowercase === false && containUppercase === false) {
    alert('Passowrd must contain at least one character type')
    return null;
  }

  var passwordOptions = {
    length: length,
    containSpecials: containSpecials,
    containNumbers: containNumbers,
    containLowercase: containLowercase,
    containUppercase: containUppercase
  }

  console.log(passwordOptions);
  return passwordOptions;
}

function randomize(arr){
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomCharacter = arr[randomIndex];

  return randomCharacter;
}

function generatePassword() {
  var options = askPassword();
  var createdPassword = [];
  var possibleCharacters = [];
  var certainCharacters = [];

  if(!options) return null;

  if(options.containSpecials) {
    possibleCharacters = possibleCharacters.concat(specials);
    certainCharacters.push(randomize(specials));
  }

  if(options.containNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    certainCharacters.push(randomize(numbers));
  }

  if(options.containLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    certainCharacters.push(randomize(lowercase));
  }

  if(options.containUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    certainCharacters.push(randomize(uppercase));
  }

  for(var i = 0; i < options.length; i++) {
    var possibleCharacters = randomize(possibleCharacters);
    createdPassword.push(possibleCharacters)
  }

  for(var i = 0; i<certainCharacters.length; i++) {
    createdPassword[i] = certainCharacters[i];
  }

  return createdPassword.join('');
}

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
