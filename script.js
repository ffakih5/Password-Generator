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
      } else if (passwordLength>128){
        alert("Password length must be a number between 8-128 characters");
        confirmLength();
      } else if (isNaN(passwordLength)){
        alert("Password length must be a number between 8-128 characters");
        confirmLength();
      } else{
      alert("Please answer the following prompts to acquire the most suited criteria for your password.\n");
      }
      return passwordLength;
  }
  function confirmUppercase(){
    uppercaseValid = prompt("Would you like to include uppercase letters in your password? \n(Yes or No)");
      uppercaseValid = uppercaseValid.toLowerCase();
  
      if (uppercaseValid === null || uppercaseValid === ""){
        alert("Please answer Yes or No");
        confirmUppercase();
  
      } else if (uppercaseValid === "yes" || uppercaseValid ==="y"){
        uppercaseValid = true;
        return uppercaseValid;
  
      } else if (uppercaseValid === "no" || uppercaseValid ==="n"){
        uppercaseValid = false;
        return uppercaseValid;
      
      } else {
        alert("Please answer Yes or No");
        confirmUppercase();
      }
      return uppercaseValid;
  }
  function confirmNumeric(){
    numericValid = prompt("Would you like to to have numeric values in your password? \n(Yes or No)");
      numericValid= numericValid.toLowerCase();
  
      if (numericValid === null || numericValid === ""){
        alert("Please answer Yes or No");
        confirmNumeric();
  
      } else if (numeric === "yes" || numericValid ==="y"){
        numericValid = true;
        return numericValid;
  
      } else if (numericValid === "no" || numericValid ==="n"){
        numericValid = false;
        return numericValid
      
      } else {
        alert("Please answer Yes or No");
        confirmNumeric();
      }
      return numericValid;
  }
  function ConfirmSpecial(){
    specialValid = prompt("Would you like to include special characters in your password? \n(Yes or No)");
      specialValid = specialValid.toLowerCase();
  
      if (specialValid=== null || specialValid === ""){
        alert("Please answer Yes or No");
        confirmSpecial();
  
      } else if (specialValid === "yes" || specialValid ==="y"){
        specialValid = true;
        return specialValid;
  
      } else if (specialValid === "no" || specialValid ==="n"){
        specialCheck = false;
        return specialValid;
      
      } else {
        alert("Please answer Yes or No");
        confirmSpecial();
      }
      return specialValid;
  }
  
   //Function used to take all the input from the previous functions and generate a password using a random number generator and 
   //the charAt method 
  function generatePassword(){
    confirmLength();
    console.log(passwordLength);
    confirmUppercase();
    console.log(uppercaseValid);
    confirmNumbers();
    console.log(numericValid);
    determineSpecial();
    console.log(specialValid);
  
  var characters = lowercaseChar;
  var password = "";
  if (uppercaseValid && numericValid && specialValid){
    characters += uppercaseChar + numericChar + specialChar;
  
  } else if (uppercaseValid && numericvalid){
    characters += uppercaseChar + numericChar;
  
  } else if (numericValid && specialValid){
    characters += numericChar + specialChar;
  
  } else if (uppercaseValid && specialValid){
    characters += uppercaseChar + specialChar;
  
  } else if (uppercaseValid){
    characters += uppercaseChar;
  
  } else if(numberValid){
    characters += numericChar;
  
  } else if (specialValid){
    characters += specialChar;
  
  } else{
    characters === lowercaseChar;
  }
  
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  
  // Write password to the #password input
  function writePassword() {
    var password1 = "";
    password1 = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password1;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
 
 
 
 
 
 
  
    