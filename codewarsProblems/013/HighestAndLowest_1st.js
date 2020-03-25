function highAndLow(numbers){
  var numToArray = numbers.replace(/ /g,", ").split(",");
  var hi = Math.max(numToArray.map(function(item) {
    return parseInt(item)
    }));
  var lo = Math.min(numToArray.map(function(item) {
    return parseInt(item)
    }));
    
    return hi + " " + lo;
}





function highAndLow(numbers){
  var numToArray = numbers.replace(/ /g,", ").split(",");
  var hi = Math.max.apply(Math, (numToArray.map(function(item) {
    return parseInt(item)
    })));
  var lo = Math.min(numToArray.map(function(item) {
    return parseInt(item)
    }));
    
    return hi + " " + lo;
}