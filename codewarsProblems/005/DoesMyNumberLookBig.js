// INSTRUCTION - Does my number look big in this?
/*
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
*/
function narcissistic( value ) {
  // Code me
  var str = value.toString();
  var exp = str.length;
  var array = [];
  for (var i = 0; i < exp; i++) {
    var base = parseInt(str[i]);
    var powered = Math.pow(base, exp);
    array.push(powered);
  }
  var total = 0;
  for (var x = 0; x < array.length; x++) {
    total = total + array[x];
  }
  if (total == value) {
    return true;
  }
  else return false;
}