//rotating an array using space
function rotateArr(arr, d) {
  let temp = new Array(arr.length);
  let k = 0;

  for (let i = d; i < arr.length; i++) {
    temp[k] = arr[i];
    k++;
  }

  for (let j = 0; j < d; j++) {
    temp[k] = arr[j];
    k++;
  }
  return temp;
}
//rotating array
function rotateArr2(arr, d) {
  let p = 1;

  while (p <= d) {
    let temp = arr[0];

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    p++;
  }

  return arr;
}
// let arr = [1, 2, 3, 4, 5, 6, 7];
// rotateArr2(arr, 3);
// REVERSING THE ARRAY
function reverseArray(arr, start, end) {
  while (start < end) {
    arr[start] = arr[start] ^ arr[end];
    arr[end] = arr[start] ^ arr[end];
    arr[start] = arr[start] ^ arr[end];
    start++;
    end--;
  }
  return arr;
}
function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    arr[start] = arr[start] ^ arr[end];
    arr[end] = arr[start] ^ arr[end];
    arr[start] = arr[start] ^ arr[end];
    start++;
    end--;
  }
  return arr;
}
// REVERSAL ALGORITHMN
// this solution rotates the array in O(n) and
// constant space O(1)
function rotateArray(arr, d) {
  if (d === 0) return;

  d = d % arr.length;

  reverseArray(arr, 0, d - 1);
  reverseArray(arr, d, arr.length - 1);
  reverseArray(arr, 0, arr.length - 1);

  return arr;
}
// rotateArray([1, 2, 3, 4, 5, 6, 7], 2);
// ROTATING AN ARRAY CLOCKWISE BY d times
function rotateArrayClockWise(arr, d) {
  let p = 0;

  while (p < d) {
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    p++;
  }

  return arr;
}
