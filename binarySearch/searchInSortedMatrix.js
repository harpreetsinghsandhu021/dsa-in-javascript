function binarySearch(mat, row, cStart, cEnd, target) {
  while (cStart <= cEnd) {
    let mid = Math.floor(cStart + (cEnd - cStart) / 2);

    if (mat[row][mid] === target) {
      return [row, mid];
    }

    if (mat[row][mid] < target) {
      cStart = mid + 1;
    } else {
      cEnd = mid - 1;
    }
  }

  return false;
}

function search(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  if (cols === 0) return [-1, -1];

  //   if there is only one row the binarySearch in that particular row
  if (rows === 1) return binarySearch(matrix, 0, 0, cols - 1, target);

  let rowStart = 0;
  let rowEnd = rows - 1;
  let colMid = Math.floor(cols / 2);

  //   run the loop until two rows are left

  while (rowStart < rowEnd - 1) {
    let mid = Math.floor(rowStart + (rowEnd - rowStart) / 2);

    if (matrix[mid][colMid] === target) {
      return [mid, colMid];
    }

    if (matrix[mid][colMid] < target) {
      rowStart = mid;
    } else {
      rowEnd = mid;
    }
  }

  if (matrix[rowStart][colMid] === target) {
    return [rowStart][colMid];
  }

  if (matrix[rowStart + 1][colMid] === target) {
    return [rowStart + 1][colMid];
  }

  if (target <= matrix[rowStart][colMid - 1]) {
    return binarySearch(matrix, rowStart, 0, colMid - 1, target);
  }
  if (
    target >= matrix[rowStart][colMid + 1] &&
    target <= matrix[rowStart][cols - 1]
  ) {
    return binarySearch(matrix, rowStart, colMid + 1, cols - 1, target);
  }
  if (target <= matrix[rowStart + 1][colMid - 1]) {
    return binarySearch(matrix, rowStart + 1, 0, colMid - 1, target);
  }
  if (
    target >= matrix[rowStart][colMid + 1] &&
    target <= matrix[rowStart][cols - 1]
  ) {
    return binarySearch(matrix, rowStart + 1, colMid + 1, cols - 1, target);
  }

  return false;
}

let mat = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(search(mat, 3));
