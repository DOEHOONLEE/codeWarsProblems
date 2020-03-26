/*
Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  for (var i=0;i<A.length;i++) {
    var array = [];
    for (var j=0;j<A.length;j++) {
      if (A[i]==A[j]) {
        array.push(A[j]);
      }
    }
    if (array.length % 2 == 1) {
      return array[0];
    }
  }
}