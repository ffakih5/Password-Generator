// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
  var numericChar= "0123456789"
  var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
  var passwordLength; 
  var userCharacters= ""
  var userCharactersIndex = 0

  for (var i= 0; i < 1; i++) {
    var passwordLength = parseInt(prompt ("Please select a password length\n"))
    if (isNaN(passwordLength) === true || passwordLength >= 8 &&  passwordLength <= 128) {
      var errorLength = confirm("Please select a numerical value between 8 and 128") 
      if (errorLength === true) {
        i -= 1 ;
      }
      






        

      )
    }
    
    
    
    
    
    
  
  
  
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;


    console.log(passwordLength); 


  }
  








  
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
 
 
 
 
 
 
  
    