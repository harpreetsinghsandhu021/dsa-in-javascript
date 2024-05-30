var isValidSudoku = function (board) {
  let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let boxes = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let num = board[row][col];

      if (num !== ".") {
        let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        console.log(num, boxIndex, rows[row]);
        if (
          rows[row].has(num) ||
          cols[col].has(num) ||
          boxes[boxIndex].has(num)
        ) {
          return false;
        }

        rows[row].add(num);
        cols[col].add(num);
        boxes[boxIndex].add(num);
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
