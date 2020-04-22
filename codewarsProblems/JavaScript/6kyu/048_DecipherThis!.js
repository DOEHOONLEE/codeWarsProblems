/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
  let splitNum = str.match(/[a-z]+|[^a-z]+/g);
  for (let j=0; j<splitNum.length; j++) {
    if (!(/\d+/.test(splitNum[j]))) {
      let arr = splitNum[j].split("");
      let first = arr[0];
      let last = arr[arr.length-1];
      arr[0] = last;
      arr[arr.length-1] = first;
      splitNum[j] = arr.join("");
    }
  }
  let fixAlpha = splitNum.map(c => c.length ? c : " ").join("").split(" ").join(" ");
  let storeNum = fixAlpha.match(/\d+/g);
  for (let i=0; i<storeNum.length; i++) {
    let getNum = +(storeNum[i]);
    let regexp = new RegExp(getNum, "g");
    let numReplace = String.fromCharCode(getNum);
    fixAlpha = fixAlpha.replace(regexp, numReplace);
  }
  return fixAlpha;
};