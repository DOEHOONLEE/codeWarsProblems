// Instruction - ListFiltering

/*
1. Take an integer (n >= 0) and a digit (0 <= d <= 9) as an integer
2. Square all numbers (0 <= k <= n) between 0 and n
3. Count the numbers of digits (d) used in the writing of all the k**2.
4. Call nb_dig the function taking n and d as parameters and returning this count
*/

function nbDig(n, d) {
  let str = "";
  for (let i=0; i<=n; i++) {
    str += (i**2);
  }
  return str.split(d).length - 1;
}