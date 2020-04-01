// Instruction - ListFiltering

/*
1. Take an integer (n >= 0) and a digit (0 <= d <= 9) as an integer
2. Square all numbers (0 <= k <= n) between 0 and n
3. Count the numbers of digits (d) used in the writing of all the k**2.
4. Call nb_dig the function taking n and d as parameters and returning this count
*/

function nbDig(n, d) {
    // your code
    var array = [];
    for (var i = 0; i <= n; i++) {
      var sqrdNum = i*i;
      var str = sqrdNum.toString();
      for (var x = 0; x < str.length; x++) {
        if (parseInt(str[x]) == d) {
          array.push(parseInt(str));
        }
      }
    }
    return array.length;
}