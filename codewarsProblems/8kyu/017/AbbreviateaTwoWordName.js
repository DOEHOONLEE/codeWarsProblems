/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/

function abbrevName(name){
    const arr = name.split(" ");
    const firstN = arr[0];
    const lastN = arr[1];
    
    return firstN[0].toUpperCase() + "." + lastN[0].toUpperCase();
}

function abbrevName(name){
  return name.split(" ").map(function(x) {
    return x[0].toUpperCase();
    }).join(".");
  
}

const abbrevName = (name) =>
    name
        .split(" ")
        .map(x => x[0].toUpperCase())
        .join(".");