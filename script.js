// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
  var numericChar= "0123456789"
  var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
  var passwordLength; 
  var uppercaseValid;
  var numericValid;
  var specialValid;


  function confirmLength(){
    passwordLength = prompt("Please select a password length (between 8-128 characters): ");
  
      if (passwordLength<8){
        alert("Password length must be a number between 8-128 characters");
        confirmLength();
      }else if (passwordLength>128){
        alert("Password length must be a number between 8-128 characters");
        confirmLength();
      }else if (isNaN(passwordLength)){
        alert("Password length must be a number between 8-128 characters");
        confirmLength();
      }else{
      alert("Please answer the following prompts to acquire the most suited criteria for your password.\n");
      }
      return passwordLength;
  }
  function confirmUppercase(){
    uppercaseCheck = prompt("Would you like to include uppercase letters in your password? \n(Yes or No)");
      uppercaseValid = uppercaseValid.toLowerCase();
  
      if (uppercaseValid === null || uppercaseValid === ""){
        alert("Please answer Yes or No");
        confirmUppercase();
  
      }else if (uppercaseValid === "yes" || uppercaseValid ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;
  
      }else if (uppercaseValid === "no" || uppercaseValid ==="n"){
        uppercaseValid = false;
        return uppercaseValid;
      
      }else {
        alert("Please answer Yes or No");
        confirmUppercase();
      }
      return uppercaseValid;
  }
  
  