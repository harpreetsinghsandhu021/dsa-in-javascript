function search(arr, target) {
  let row = 0;
  let col = arr.length - 1;

  while (row < arr.length && col >= 0) {
    if (arr[row][col] === target) {
      return [row, col];
    }

    if (arr[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return [-1, -1];
}

let mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [28, 29, 37, 49],
  [33, 34, 38, 50],
];

console.log(search(mat, 34));
