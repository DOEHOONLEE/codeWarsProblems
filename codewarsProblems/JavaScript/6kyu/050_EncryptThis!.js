/*
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(str) {
  let splitNum = str.split(" ");
  for (let j=0; j<splitNum.length; j++) {
    if (!(/\d+/.test(splitNum[j]))) {
      let arr = splitNum[j].split("");
      let first = arr[1];
      let last = arr[arr.length-1];
      arr[0] = arr[0].charCodeAt(0)+"";
      arr[1] = last;
      arr[arr.length-1] = first;
      splitNum[j] = arr.join("");
    }
  }
  return splitNum.map(c => c.trim()).join(" ");
}