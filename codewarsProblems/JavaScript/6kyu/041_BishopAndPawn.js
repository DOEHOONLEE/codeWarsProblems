function bishopAndPawn(bishop, pawn) {
  let bishopPos = +(bishop.charCodeAt(0)+""+bishop[1]);
  let pawnPos = +(pawn.charCodeAt(0)+""+pawn[1]);
  let answer = false;
  for (let i=0;i < 1048;i+=11) {
    if ((bishopPos+i == pawnPos) || (bishopPos-i == pawnPos)) {
      return !answer;
    }
  }
  for (let j=0;j < 1041;j+=9) {
    if ((bishopPos+j == pawnPos) || (bishopPos-j == pawnPos)) {
      return !answer;
    }
  }
  return answer;
}


function bishopAndPawn(bishop,pawn) {
    let bishopPos = [(bishop.charCodeAt(0)), +(bishop[1])];
    let pawnPos = [(pawn.charCodeAt(0)), +(pawn[1])];
    let answer = false;
    console.log(bishopPos);
    console.log(pawnPos);
    console.log(typeof bishopPos[0], typeof bishopPos[1]);
    for (let i=0; i<9;) {
        if ((bishopPos[0]+i || bishopPos[0]-i) == pawnPos[0]) {
            if ((bishopPos[1] - pawnPos[1]) % 9 == 0) {
                return !answer;
            }
        }
    }
    return answer;
}


function bishopAndPawn(bishop,pawn) {
    let bishopPos = [(bishop.charCodeAt(0)), +(bishop[1])];
    let pawnPos = [(pawn.charCodeAt(0)), +(pawn[1])];
    let answer = false;
    if ((bishopPos[1] - pawnPos[1]) % ) {
        
    }
    return answer;
}


c3/g8 => 993/1038