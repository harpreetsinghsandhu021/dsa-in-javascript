function getParticularRow(rowIndex) {
  rowIndex = rowIndex + 1;
  let arr = new Array(rowIndex);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array();
  }

  for (let line = 0; line < rowIndex; line++) {
    for (let i = 0; i <= line; i++) {
      if (line == i || i == 0) {
        arr[line][i] = 1;
      } else {
        arr[line][i] = arr[line - 1][i - 1] + arr[line - 1][i];
      }
    }
  }

  return arr[arr.length - 1];
}

console.log(getParticularRow(3));
