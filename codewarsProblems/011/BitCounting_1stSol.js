// Bit Counting

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
  // Program Me
  var sum = 0;
  var bin = ((n >>> 0).toString(2)).split("");
  for (var i = 0; i < bin.length; i++) {
    sum+=parseInt(bin[i]);
  }
  return sum;
};