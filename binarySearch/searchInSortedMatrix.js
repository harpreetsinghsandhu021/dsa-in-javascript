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

var searchMatrix = function (matrix, target) {
  // Step 1: Check for empty matrix
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  // Step 2: Get number of rows and columns
  let rows = matrix.length;
  let cols = matrix[0].length;

  // Step 3: Initialize search space boundaries
  let left = 0;
  let right = rows * cols - 1;

  // Step 4: Binary search
  while (left <= right) {
    // Step 4a: Calculate mid index
    let mid = Math.floor((left + right) / 2);

    // Step 4b: Convert mid index to row and column indices
    let row = Math.floor(mid / cols);
    let col = mid % cols;

    // Step 4c: Retrieve value at mid index
    let midValue = matrix[row][col];

    // Step 4d: Check if mid value matches target
    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      // Step 4e: If mid value is less than target, adjust left boundary
      left = mid + 1;
    } else {
      // Step 4f: If mid value is greater than target, adjust right boundary
      right = mid - 1;
    }
  }

  // Step 5: Target not found
  return false;
};

console.log(searchMatrix(mat, 3));
