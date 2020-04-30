/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

function iqTest(numbers) {
  var odd = [];
  var even = [];
  var simplified = numbers.split(" ");
  for (var i = 0; i < simplified.length; i++) {
    if (parseInt(simplified[i])%2 == 0) {
      even.push(simplified[i]);
    }
    else odd.push(simplified[i]);
  }
  for (var i = 0; i < simplified.length; i++) {
    if (odd.length > even.length) {
      if (even[0] == simplified[i]) {
        return i+1;
      }
    }
    else {
      if (odd[0] == simplified[i]) {
        return i+1;
      }
    }
  }
}

// => REFACTORED

function iqTest(numbers){
  let even = numbers.split(" ").filter(c => c%2 == 0);
  let odd = numbers.split(" ").filter(c => c%2 == 1);
  return even.length > odd.length ? numbers.split(" ").indexOf(odd[0])+1 : numbers.split(" ").indexOf(even[0])+1
}