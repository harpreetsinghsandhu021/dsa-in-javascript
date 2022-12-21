const N = 4;

const twoDArray = new Array(N);

for (let i = 0; i < twoDArray.length; i++) {
  twoDArray[i] = new Array(N);
  twoDArray[i].fill(0);
}

function nQueen(board, col) {
  // console.log(board);

  if (col >= N) return true;

  for (let row = 0; row < N; row++) {
    if (isSafe(board, row, col)) {
      board[row][col] = 1;

      if (nQueen(board, col + 1)) {
        return true;
      }
      board[row][col] = 0;
    }
  }

  return false;
}

function isSafe(board, row, col) {
  for (let i = 0; i < col; i++) {
    if (board[row][i] === 1) return false;
  }

  for (let r = row, c = col; r >= 0 && c >= 0; r-- && c--) {
    if (board[r][c] === 1) return false;
  }

  for (let m = row, n = col; m < N && n >= 0; m++ && n--) {
    if (board[m][n] === 1) return false;
  }

  return true;
}

// console.log(nQueen(twoDArray, 0));
// console.log(twoDArray);

const arr = [2, 5, 6, 8, 910, 34];

// console.log(15 & 1);

var findMedianSortedArrays = function (nums1, nums2) {
  let newArr = nums1.concat(nums2);

  for (let i = newArr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  console.log(newArr);

  console.log(
    (newArr[(newArr.length - 1) >> 1] +
      newArr[((newArr.length - 1) >> 1) + 1]) /
      2
  );

  return (newArr.length & 1) === 0
    ? (newArr[(newArr.length - 1) >> 1] +
        newArr[((newArr.length - 1) >> 1) + 1]) /
        2
    : newArr[newArr.length >> 1];
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
