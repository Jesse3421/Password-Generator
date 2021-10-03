// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordOutput = document.querySelector("#password")
var passwordContainer = document.querySelector(".card-body")
var greeting = "Welcome to the Password Generator. Which elements would you like to include in your password?"
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",] 
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var characterPrompt
var password 



// Write password to the #password input
function passwordPrompts() {
  window.alert(greeting)
  
  //Initial Question...How many characters? 
  var characterPrompt = Number(window.prompt("How many characters do you want the password to be? Pick a number between 8 and 128", ""))
  console.log(characterPrompt)
  
  if(characterPrompt < 7 || characterPrompt > 129) {
    return window.alert("Incorrect amount of characters...Try again")
    
    }else{
      let passwordLength = characterPrompt
      console.log(passwordLength)
      
    } 

    //Prompts for the other password elements 
  var lowerCasePrompt = window.confirm("Would you like to include lowercase letters in your password? Please click OK to answer yes or CANCEL for no." )
  
  var upperCasePrompt = window.confirm("Would you like to include Uppercase letters in your password? Press 'OK' if Yes and 'Cancel' if No." )

  var numberPrompt = window.confirm("Would you like to include numbers in your password? Press 'OK' if Yes and 'Cancel' if No")

  var symbolPrompt = window.confirm("Would you like to include special characters in your password? Press 'OK' if Yes and 'Cancel' if No")

    //error message if the individual doesn't select any parameters
  if(!lowerCasePrompt && !upperCasePrompt && !numberPrompt && !symbolPrompt) {
    alert("You must choose to include at least one of these components. Try again!")
    return generatePassword()
  }
  //booleans from the confirm windows
  var responses = {
    charLength: characterPrompt,
    lowerCase: lowerCasePrompt,
    upperCase: upperCasePrompt,
    numeric: numberPrompt,
    symbol: symbolPrompt
  }
  return responses
}
//Main function that's triggered by button
function generatePassword() {
  var choices = passwordPrompts()
  var passwordArr = []
//Pushing selected paramaters to the Array Pool
  if(choices.lowerCase) {
    for (i = 0; i < lowerCaseLetters.length; i++){
      passwordArr.push(lowerCaseLetters[i])
    }
  }
  console.log (passwordArr)

  if(choices.upperCase) {
    for (i = 0; i < upperCaseLetters.length; i++){
      passwordArr.push(upperCaseLetters[i])
    }
  }
  if(choices.numeric) {
    for (i = 0; i < numbers.length; i++) {
      passwordArr.push(numbers[i])
    }
  }
  if(choices.symbol) {
    for (i = 0; i < symbols.length; i++) {
      passwordArr.push(symbols[i])
    }
  }
console.log(passwordArr)
// final for loop to obtain password  
var characterNumber = parseInt(choices.charLength, 10)
console.log(characterNumber)
console.log(choices.charLength)
var password = ""
  for(let i = 0; i < characterNumber; i++){
    var randomizer = Math.floor(Math.random() * passwordArr.length) 
    password = password + passwordArr[Math.floor(Math.random() * passwordArr.length - 1)]
   //display password in generator
    passwordOutput.innerText = password 
}
}
generateBtn.addEventListener("click", generatePassword)

 