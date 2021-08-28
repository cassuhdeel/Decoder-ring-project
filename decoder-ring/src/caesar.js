// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
    if (!shift || shift > 25 || shift < -25) {
      return false
    }
    
  let alph = "abcdefghijklmnopqrstuvwxyz"
  let newInput = input.toLowerCase()
  let result = ""
  
    for (let i = 0; i < newInput.length; i++) {
      if (newInput[i] === " " || !(alph.includes(newInput[i]))) {
          result += newInput[i]
          continue
          }
      
      for (let j = 0; j < alph.length; j++) {
        if (newInput[i] === alph[j]) {
       let numShift
        if (encode) {
          numShift = Number(j) + shift
        } else {
          numShift = Number(j) - shift
        }
        
        if (numShift < 0) 
          numShift = numShift + 26
        
        if (numShift > 25) 
          numShift = numShift - 26
         
          result += alph[numShift]
        }        
    } 
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
