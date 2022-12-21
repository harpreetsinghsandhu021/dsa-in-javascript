function sortedMerge(a, b, n, m) {
  let i = n - 1;
  let j = m - 1;

  let lastIndex = n + m - 1;
  console.log(lastIndex, j);

  while (j >= 0) {
    if (i >= 0 && a[i] > b[j]) {
      a[lastIndex] = a[i];
      i--;
    } else {
      a[lastIndex] = b[j];
      j--;
    }
    lastIndex--;
  }
  return a;
}

console.log(sortedMerge([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3));
// [1, 2, 3, 0, 0, 6], [2, 5, 6]
