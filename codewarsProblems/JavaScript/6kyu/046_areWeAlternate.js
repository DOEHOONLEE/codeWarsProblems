/*
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
*/
function isAlt(word) {
  let vowels = ["a","e","i","o","u"];
  for (let i=0; i<word.length-1; i++) {
    if (vowels.includes(word[i])) {
      if (vowels.includes(word[i+1])) {
        return false;
      }
    }
    else if (!vowels.includes(word[i+1])) {
      return false;
    }
  }
  return true;
}