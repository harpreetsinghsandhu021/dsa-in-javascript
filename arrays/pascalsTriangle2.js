function printPascal(n) {
  let arr = new Array(n).fill(0);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array();
    arr[i].fill(0);
  }

  for (line = 0; line < n; line++) {
    for (i = 0; i <= line; i++) {
      if (line == i || i == 0) {
        arr[line][i] = 1;
      } else {
        arr[line][i] = arr[line - 1][i - 1] + arr[line - 1][i];
      }
    }
  }

  return arr;
}

console.log(printPascal(5));
