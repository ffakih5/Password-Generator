// Assignment Code
var generateBtn = document.querySelector("#generate");
function promptCriteria() { 
   
    do  {  
        var passwordLength = prompt("password length")
        var passwordLengthNumber = parseInt(passwordLength);
    } while (!(passwordLengthNumber >= 8 &&  passwordLengthNumber <= 128))
     return passwordLengthNumber

}
function generatePassword() {
   var passwordLength=  promptCriteria() 
    return "password" + passwordLength

}
// Write password to the #password input
function writePassword() { 
  
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);