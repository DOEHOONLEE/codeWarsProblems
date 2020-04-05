/*
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/
function tripledouble(num1, num2) {
  var result=false;
  (num1+"").split("").forEach(function(cv, ci, arr) {
    if ((cv == arr[ci+1]) && (arr[ci+1] == arr[ci+2]) && (arr[ci+2] == cv)) {
      (num2+"").split("").forEach(function(cv2, ci2, arr2) {
        if ((cv2 == arr2[ci2+1]) && cv2 == cv) {
          result = true;
        }
      });
    }
  });
  return (result) ? 1 : 0;
}