// Instruction - ListFiltering

/*
1. In this kata, you will create a function that takes a list of non-negative integers and strings
2. and returns a new list with the strings filtered out.
*/

function filter_list(l) {
  for (let i=0;i<l.length; i++) {
    if (isNaN(l[i])) {
      l.slice(i,1);
    }
  }
  return l;
}