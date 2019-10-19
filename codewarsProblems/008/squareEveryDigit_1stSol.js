function squareDigits(num){
  //may the code be with you
  // check if the number is an integer
  if (num % 1 === 0) {
    // convert the number to a string
    var NumToStr = num.toString();
    
    // number storage
    var NumStor = [];
    
    // get each digit of a number
    for (var x = 0; x < NumToStr.length; x++) {
    
      // get the number String and change it to a number
      var backToNum = parseInt(NumToStr[x]);
      
      // self squared
      var sqrdNum = backToNum * backToNum;
      
      // push it to the array
      NumStor.push(sqrdNum);
    }
    
    // join the elements in the array
    var joinedNum = NumStor.join();
    // remove commas
    var finalResult = joinedNum.replace(/,/g , "");
    
    return parseInt(finalResult);
  }
}