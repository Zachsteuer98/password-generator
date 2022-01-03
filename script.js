// Assignment code here

var generatePassword = function() {

 let promptLength = window.prompt("Please choose how many characters you would like your password to have. Choose between 8 and 128 characters.")
 if (parseInt(promptLength) >= 8 && parseInt(promptLength) <= 128) {
   promptLength = Math.floor(promptLength);
 } 
 else if (parseInt(promptLength) < 8) {
   window.alert("Your password is less than 8 characters, please try again")
   return 
 }
 else if (parseInt(promptLength) > 128) {
   window.alert("Your password is more than 128 characters, please try again")
   return 
 }
 else {
   window.alert("Your input value is invalid, please try again.")
   return 
 };

 // choose whether to have uppercase letters
let chooseUppercase = window.confirm("Do you want to have UPPERCASE letters in your password?")
// if (chooseUppercase) {
//   chooseUppercase = true;
// } else {
//   chooseUppercase = false;


// choose whether to have lowercase letters
let chooseLowercase = window.confirm("Do you want to have LOWERCASE letters in your password?")
// if (chooseLowercase) {
//   chooseLowercase = true;
// } else {
//   chooseLowercase = false;
// };

//choose whether to have numbers 
let chooseNumbers = window.confirm("Do you want to have NUMBERS in your password?")
// if (chooseNumbers) {
//   chooseNumbers = true;
// } else {
//   chooseNumbers = false;
// };

//choose whether to have special characters
let chooseSpecialCharacters = window.confirm("Do you want to have SPECIAL CHARACTERS in your password?")
// if (chooseSpecialCharacters) {
//   chooseSpecialCharacters = true;
// } else {
//   chooseSpecialCharacters = false;
// };

//pull characters from charset

let charset = ""
let  newPassword = ""
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+{}:<>?-=[];',./"
if (chooseUppercase) {
  charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  newPassword += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
}
if (chooseLowercase) {
  charset =  charset + "abcdefghijklmnopqrstuvwxyz"
  let lowercase = "abcdefghijklmnopqrstuvwxyz"
  newPassword += lowercase.charAt(Math.floor(Math.random() * lowercase.length))
}
if (chooseNumbers) {
  charset =  charset + "1234567890"
  let numbers = "1234567890"
  newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length))
}
if (chooseSpecialCharacters) {
  charset = charset + "!@#$%^&*()_+{}:<>?-=[];',./</>"
  let characters = "!@#$%^&*()_+{}:<>?-=[];',./</>"
  newPassword += characters.charAt(Math.floor(Math.random() * characters.length))
};

var newPromptLength = promptLength - newPassword.length

// create password array... let i = newPassword + ?

for (let i = 0; i < newPromptLength; i++)  {
  newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
};
return newPassword;
};


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


