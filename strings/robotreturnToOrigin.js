function finalPosition(move) {
  let l = move.length;
  let countUp = 0,
    countDown = 0;
  let countLeft = 0,
    countRight = 0;

  for (let i = 0; i < l; i++) {
    if (move[i] == "U") countUp++;
    else if (move[i] == "D") countDown++;
    else if (move[i] == "L") countLeft++;
    else if (move[i] == "R") countRight++;
  }

  console.log(
    "Final Position: (" +
      (countRight - countLeft) +
      ", " +
      (countUp - countDown) +
      ")"
  );
}

let move = "UD";
finalPosition(move);
