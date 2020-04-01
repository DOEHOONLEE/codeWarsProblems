/*
shortified than the first solution, but Math.pow can be slower than simple multiplication depending on browsers
*/

function squareDigits(num){
  var numToStr = num.toString();
  let finalAns = "";
  for (let i=0; i<numToStr.length;i++) {
    var eaDigit = Number(numToStr[i]);
    finalAns += (Math.pow(eaDigit, 2));
  }
  return Number(finalAns);
}