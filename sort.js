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
// console.log(insertionSort([3, 2, 1, 0, 0, 0]));
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

maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
kadanesAlgoritmn([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
