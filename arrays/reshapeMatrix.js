function ConstMatrix(mat, N, M, A, B) {
  if (N * M != A * B) return;

  let idx = 0;

  // Initialize a new matrix
  let res = new Array(A);
  // Loop to create 2D array using 1D array
  for (var i = 0; i < res.length; i++) {
    res[i] = new Array(2);
  }

  // Traverse the matrix, mat[][]
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      res[Math.floor(idx / B)][idx % B] = mat[i][j];

      // Update idx
      idx++;
    }
  }

  // Print the resultant matrix
  let str = "";
  for (let i = 0; i < A; i++) {
    for (let j = 0; j < B; j++) str += res[i][j];

    str += "\n";
  }

  return str;
}

// Driver Code

let mat = [[1, 2, 3, 4, 5, 6]];
let A = 2;
let B = 3;
let N = mat.length;
let M = mat[0].length;
console.log(ConstMatrix(mat, N, M, A, B));
