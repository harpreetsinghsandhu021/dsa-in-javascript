function solveSudoku(board, n) {
  let row = -1;
  let col = -1;
  let isEmpty = true;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        row = i;
        col = j;
        isEmpty = false;
        break;
      }
    }
    if (!isEmpty) {
      break;
    }
  }

  if (isEmpty) {
    return true;
  }

  for (let num = 1; num <= n; num++) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;

      if (solveSudoku(board, n)) {
        return true;
      }
      board[row][col] = 0;
    }
  }

  return false;
}

function isSafe(board, row, col, num) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === num) return false;
  }

  for (let j = 0; j < board.length; j++) {
    if (board[j][col] === num) return false;
  }

  let sqrt = Math.floor(Math.sqrt(board.length));
  let boxRowStart = row - (row % sqrt);
  let boxColStart = col - (col % sqrt);

  for (let r = boxRowStart; r < boxRowStart + sqrt; r++) {
    for (let c = boxColStart; c < boxColStart + sqrt; c++) {
      if (board[r][c] === num) return false;
    }
  }

  return true;
}

let board = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];
let n = board.length;
console.table(board);
console.log(solveSudoku(board, n));
console.table(board);
