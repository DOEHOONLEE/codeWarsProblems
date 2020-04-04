// Chess Board Cell Color

/*
INSTRUCTION - Given two cells on the standard chess board, determine whether they have the same color or not.
*/
function chessBoardCellColor(cell1, cell2) {
  var check = "ABCDEFGH";
  var sum1;
  var sum2;
  for (var i=0; i<8; i++) {
    if (cell1[0] == check[i]) {
      sum1 = i+1+parseInt(cell1[1]);
    }
    if (cell2[0] == check[i]) {
      sum2 = i+1+parseInt(cell2[1]);
    }
  }
  if ((sum1+sum2)%2 == 0) {
    return true;
  }
  else {return false;}
}