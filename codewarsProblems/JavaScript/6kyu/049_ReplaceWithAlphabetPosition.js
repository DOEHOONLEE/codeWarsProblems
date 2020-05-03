/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/
function alphabetPosition(text) {
  var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var array = [];
  text = text.toLowerCase();
  for (var i = 0; i < text.length; i++) {
    for (var x = 0; x < alpha.length; x++) {
      if (text[i] == alpha[x]) {
        var theNum = x+1;
        array.push(theNum);
      }
    }
  }
  text = array.join().replace(/,/g , " ");
  return text;
}

// => REFACTORED

function alphabetPosition(text) {
  return text
  // split string into an array
  .split("")
  
  // filter alphabets - ignore anything else
  .filter(function(t) {
    return /[a-zA-Z]/.test(t)
  })
  
  // get alphabet position by using charCodeAt
  .map(function(c) {
    return c.toLowerCase().charCodeAt(0) - 96
  })
  
  // make it back to a string
  .join(" ");
}

// without comments..

function alphabetPosition(text) {
  return text.split("").filter(function(t) {
    return /[a-zA-Z]/.test(t)
  }).map(function(c) {
    return c.toLowerCase().charCodeAt(0) - 96
  }).join(" ");
}