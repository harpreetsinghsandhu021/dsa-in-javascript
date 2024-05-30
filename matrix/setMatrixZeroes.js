var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let rows = new Array(m).fill(false);
  let cols = new Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

function setMatrixZeroes(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let column0 = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;

        if (j === 0) {
          column0 = 0;
        } else {
          matrix[0][j] = 0;
        }
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] != 0) {
        if (matrix[0][j] === 0 || matrix[i][0] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  if (matrix[0][0] === 0) {
    matrix[0].fill(0);
  }

  if (column0 === 0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

console.log(
  setMatrixZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
