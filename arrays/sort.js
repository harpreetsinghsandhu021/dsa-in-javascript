function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// console.log(bubbleSort([3, 2, 1, 0, 0, 0]));
function removeDuplicate(arr) {
  const [...pfArray] = new Set([...arr]);
  return pfArray;
}

// console.log(removeDuplicate([3, 4, 5, 4, 4, 6, 6]));

function insertionSort(arr) {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (var j = i - 1; arr[j] < temp && j > -1; j++) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}
const sortedArray = insertionSort([3, 2, 1, 0, 0, 0]);
// console.log(sortedArray);

function merge(arr1, arr2) {
  let combined = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }
  return combined;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// console.log(mergeSort([3, 2, 1, 0, 0, 0]));

function maxSumSubArray(arr) {
  let maxSum = 0;
  let count;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = i; j < arr.length; j++) {
      count = count + arr[j];

      if (count > maxSum) {
        maxSum = count;
      }
    }
  }
  console.log(maxSum);
}

function kadanesAlgoritmn(arr) {
  let max = 0;
  let curr = 0;

  for (let i = 0; i < arr.length; i++) {
    curr = curr + arr[i];

    if (curr > max) {
      max = curr;
    }

    if (curr < 0) {
      curr = 0;
    }
  }

  console.log(max);
}

// maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// kadanesAlgoritmn([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//quick sort

function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

function pivot(arr, pivot = 0, endIndex = arr.length - 1) {
  let swapIndex = pivot;

  for (let i = pivot + 1; i <= endIndex; i++) {
    if (arr[i] < arr[pivot]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, pivot, swapIndex);

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// console.log(pivot([4, 6, 1, 7, 3, 2, 5]));

// console.log(quickSort([4, 6, 1, 7, 3, 2, 5]));

// merge sort with another approach

function merge2(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;

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

  return arr;
}

function mergeSort2(arr, l, r) {
  if (l < r) {
    let mid = Math.floor((l + r) / 2);

    mergeSort2(arr, l, mid);

    mergeSort2(arr, mid + 1, r);

    merge2(arr, l, mid, r);
  }
  return arr;
}

let nowArr = [4, 6, 1, 7, 3, 2, 5];

// console.log(mergeSort2(nowArr, 0, nowArr.length - 1));
