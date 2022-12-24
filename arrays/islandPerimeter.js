function numofneighbour(mat, i, j, R, C) {
  let count = 0;

  // UP
  if (i > 0 && mat[i - 1][j] === 1) count++;

  // LEFT
  if (j > 0 && mat[i][j - 1] === 1) count++;

  // DOWN
  if (i < R - 1 && mat[i + 1][j] === 1) count++;

  // RIGHT
  if (j < C - 1 && mat[i][j + 1] === 1) count++;

  return count;
}

function findperimeter(mat) {
  let perimeter = 0;
  let rows = mat.length;
  let cols = mat[0].length;

  for (let i = 0; i < mat.length; i++)
    for (let j = 0; j < mat[i].length; j++)
      if (mat[i][j] === 1)
        perimeter += 4 - numofneighbour(mat, i, j, rows, cols);

  return perimeter;
}

let mat = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(findperimeter(mat));
