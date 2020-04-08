/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
  num = num+"";
  let answer = [];
  for (var i=0;i<num.length;i++) {
    if (num[i]>0) {
      answer.push(num[i]+"0".repeat((num.length-i-1)));
    }
  }
  return answer.join(" + ");
}