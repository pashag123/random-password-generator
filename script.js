var generateBtn = document.querySelector("#generate");


var numbers = '0123456789'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var specialCharacters = '!#$%&*+-.<=>?^_{|}~'.split('');



// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var blankPassword = [];
  var pwLength = prompt('Please enter desired length of password, Must be 8-128 characters');
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert('please enter according length');
    return null;

  }
  var chooseNum = confirm('would you like number characters?');
  var chooseUpperCase = confirm('would you like upper case characters?');
  var chooseLowerCase = confirm('would you like lower case characters?');
  var chooseSpecials = confirm('would you like special characters?');

  if (!chooseNum && !chooseUpperCase && !chooseLowerCase && !chooseSpecials) {
    alert('must make selection'); 
    return null;
  }

  var newPassword = [];
  if (chooseNum) {
    newPassword = newPassword.concat(numbers)
  }
  if (chooseUpperCase) {
    newPassword = newPassword.concat(upperCase)
  }
  if (chooseLowerCase) {
    newPassword = newPassword.concat(lowerCase)
  }
  if (chooseSpecials) {
    newPassword = newPassword.concat(specialCharacters)
  }

  for (var i = 0; i < pwLength; i++) {

    var randomIndex = (Math.floor(Math.random() * newPassword.length));
    blankPassword += newPassword[randomIndex];


  }

  return blankPassword;



}
