/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for (var i=0; i<str.length;i++) {
    for (var v=0; v<5;v++) {
      if (str[i] == vowels[v]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}