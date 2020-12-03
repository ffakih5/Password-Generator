// Assignment Code
-generate password button is pressed, followed by series of prompts .
-prompts ask which criteria is needed:
-(password length; upper/lowercase, special characters)
-upper/owercase, special characters in an array
-input stored in variable per prompt
-validation used to ensure user criteria is met
-Once prompts are done, random number generator runs over each array to oputput a password at the selected length  At the end of the prompts, a random number generator needs to run over each array and output a password the length selected.
-password returned, output in the password form 
-varaibles: passwordLength, lowercaseChar, uppercaseChar, specialChar, 
-random number generator; iterate the number of times stored in the password length variable
-Function- generate password = generatePassword();
-generatePassword() will return password to the password variable //

var generateBtn = document.querySelector("#generate");
function promptCriteria() { 
  /* 
    do  {  
        var passwordLength = prompt("password length")
        var passwordLengthNumber = parseInt(passwordLength);
    } while (!(passwordLengthNumber >= 8 &&  passwordLengthNumber <= 128))
     return passwordLengthNumber

}
function generatePassword() {
   var passwordLength=  promptCriteria() 
    return "password" + passwordLength  */

}
// Write password to the #password input
function writePassword() { 
  var 
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);