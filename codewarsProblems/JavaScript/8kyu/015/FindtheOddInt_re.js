/*
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  let num = {};
  A.forEach(function(c) {
    num[c] = num[c] ? num[c] +1 : 1;
  });
  return +Object.keys(num).filter(function(odd) {return num[odd] %2 !== 0})
}