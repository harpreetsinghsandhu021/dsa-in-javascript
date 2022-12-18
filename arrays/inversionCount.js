function mergeHelper(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;
  let count = 0;

  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    left[i] = arr[l + i];
  }

  for (let j = 0; j < n2; j++) {
    right[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      count += m + 1 - (l + i);
      j++;
    }

    k++;
  }

  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }

  return count;
}

function mergeSortAndCount(arr, left, right) {
  let count = 0;

  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    count += mergeSortAndCount(arr, left, mid);
    count += mergeSortAndCount(arr, mid + 1, right);

    count += mergeHelper(arr, left, mid, right);
  }

  return count;
}

let arr = [2, 4, 1, 3, 5];
// let arr = [4, 6, 1, 7, 3, 2, 5];

console.log(mergeSortAndCount(arr, 0, arr.length - 1));
