function chessBoardCellColor(cell1, cell2) {
  let one = +cell1[0].toLowerCase().charCodeAt(0) - 96 + +cell1[1];
  let two = +cell2[0].toLowerCase().charCodeAt(0) - 96 + +cell2[1];
  let answer = one + two;

  return answer % 2 == 0 ? true : false;
}