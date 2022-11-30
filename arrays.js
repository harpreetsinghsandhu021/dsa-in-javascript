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
// rotateArrayClockWise([1, 2, 3, 4, 5, 6, 7], 2);

//searching a key in array
function searchInArray(arr, key) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      index = i;
    }
  }

  if (!index) {
    return "no key found";
  }

  return index;
}

// console.log(searchInArray([5, 6, 7, 8, 9, 10, 1, 2, 3], 3));

// function reverseArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     arr[start] = arr[start] ^ arr[end];
//     arr[end] = arr[start] ^ arr[end];
//     arr[start] = arr[start] ^ arr[end];
//     start++;
//     end--;
//   }

//   return arr
// }

// reverseArray([51, 2, 3, 4, 5, 6, 73]);

// finding the majority element in array
// time complexity is O(n * n)
function majorityElements(arr) {
  let count;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
        index = i;
      }
    }
  }

  if (count > Math.floor(arr.length >> 1)) {
    return arr[index];
  } else {
    return "no majority element found!!";
  }
}

// finding the majority element in an array
// time complexity is O(nlogn) because we are
// using sorting
function majorityElements2(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let startIndex = 0;
  let count = 1;
  let maxCount = 0;
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[startIndex]) {
      count++;
    } else {
      startIndex = i;
      count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }

  if (maxCount > Math.floor(arr.length >> 1)) {
    return arr[index];
  } else {
    return "no majority element found!!";
  }
}

// 👑 The BEst approach finding majority element in O(n)
function majorityElements3(arr) {
  let temp = 0;
  let count = 1;
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[temp]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      temp = i;
      count = 1;
      index = i;
    }
  }

  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[index]) {
      maxCount++;
    }
  }

  if (maxCount > Math.floor(arr.length >> 1)) {
    return arr[index];
  } else {
    return "no majority element found!!";
  }
}

// majorityElements3([9, 9, 8, 8, 8, 8]);

// ROTATING array clockwise using reversal algorithmn
function clockWiseRotationUsingReversal(arr, d) {
  let n = arr.length - 1;

  reverseArray(arr, 0, n - d);
  reverseArray(arr, n - d, d);
  reverseArray(arr, 0, n);

  return arr;
}

// clockWiseRotationUsingReversal([1, 2, 3, 4, 5, 6], 2);

// segregating even and odd
// using O(n) space complexity
function segregateEvenAndOdd(arr) {
  let combined = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) === 0) {
      combined.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) !== 0) {
      combined.push(arr[i]);
    }
  }

  return combined;
}

// segregating even and odd in time complexity of O(n)
// and constant space
function segregateEvenAndOdd2(arr) {
  let evenIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) === 0) {
      arr[evenIndex] = arr[i] ^ arr[evenIndex];
      arr[i] = arr[i] ^ arr[evenIndex];
      arr[evenIndex] = arr[i] ^ arr[evenIndex];
      evenIndex++;
    }
  }

  return arr;
}

// segregateEvenAndOdd([1, 3, 2, 4, 7, 6, 9, 10]);
// segregateEvenAndOdd2([1, 3, 2, 4, 7, 6, 9, 10]);

// replacing each element with i - 1 * i + 1
function multiplyElement(arr) {
  console.log(arr);
  let prev = arr[0];
  let secondLast = arr[arr.length - 2];
  arr[0] = arr[0] * arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    let curr = arr[i];
    arr[i] = prev * arr[i + 1];
    prev = curr;
  }

  arr[arr.length - 1] = secondLast * arr[arr.length - 1];

  return arr;
}

// multiplyElement([2, 3, 4, 5, 6, ]);

//swap 0 to end of array
// solution has a time complexity of O(n)
// and space complexity of O()
function swapZeroes(arr) {
  let k = 0;
  let combined = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      combined[k] = arr[i];
      k++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      combined[k] = arr[i];
      k++;
    }
  }

  return combined;
}

// swapping zeroes to end of array
// in O(n) time complexity and constant space
function swapZeroesTwo(arr) {
  let endIndex = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i] = arr[endIndex] ^ arr[i];
      arr[endIndex] = arr[endIndex] ^ arr[i];
      arr[i] = arr[endIndex] ^ arr[i];
      endIndex--;
    }
  }

  return arr;
}

// swapping two variables
function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

// swapping zeroes to end of the array
function swapZeroesThree(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      swap(arr, i, j);
      j++;
    }
  }

  return arr;
}

// swapZeroes([5, 6, 0, 4, 6, 0, 9, 0, 8])
// swapZeroesTwo([5, 6, 0, 4, 6, 0, 9, 0, 8])
// swapZeroesThree([5, 6, 0, 4, 6, 0, 9, 0, 8]);

// reverse([4, 5, 1, 2])

function reArrange(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if ((i & 1) === 0) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}

// reArrange([6, 4, 2, 1, 8, 3])

function compare(X, Y) {
  let XY = X + Y;
  let YX = Y + X;

  return YX - XY;
}

// reArranging array to get largest number formation
function reArrangeForLargestNumeber(arr) {
  arr.sort(function (a, b) {
    let ab = String(a) + String(b);
    let ba = String(b) + String(a);

    return ba - ab;
  });

  return arr.join("");
}

// reArrangeForLargestNumeber([1, 34, 3, 98, 9, 76, 45, 4])

// finding minimum element in an array
function findMinimumElement(arr) {
  let curr;
  let min = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    curr = arr[i];

    if (curr < min) {
      min = curr;
    }
  }

  return min;
}

// findMinimumElement([5, 6, 1, 2, 3, 4])

function multipleLeftRotations(arr, k) {
  let p = 0;

  while (p < k) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    p++;
  }

  return arr;
}

// multipleLeftRotations([1, 3, 5, 7, 9],1)
// multipleLeftRotations([1, 3, 5, 7, 9],3)
// multipleLeftRotations([1, 3, 5, 7, 9],4)
// multipleLeftRotations([1, 3, 5, 7, 9],6)

// reArranging negative and positive elements alternately
function reArrangeNegativeAndPostiveAlternately(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (arr[i] > 0) i++;

    while (arr[j] < 0) j--;

    if (i < j) {
      swap(arr, i, j);
    }
  }

  let k = 0;

  while (k < arr.length && i < arr.length) {
    swap(arr, k, i);
    k += 2;
    i++;
  }

  return arr;
}

// NegativeToEnd([2,3,-4,-1,6,-9])

// finding kth smallest element
// the time complexity of this approach is O(nlogn)
//can use the same for finding the kth largest element
function KthSmallestElement(arr, k) {
  arr.sort(function (a, b) {
    return a - b;
  });

  return arr[k - 1];
}

// console.log(KthSmallestElement([7, 10, 4, 3, 20, 15],3))

// bring negative to front and positive to end

//this method mixes the order of both positive and
// negative elements
function negativeToFrontAndPositiveToEnd(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    while (arr[i] < 0) i++;
    while (arr[j] > 0) j--;

    if (i < j) {
      swap(arr, i, j);
    }
  }
  return arr;
}

// console.log(
//   negativeToFrontAndPositiveToEnd([12, 11, -13, -5, 6, -7, 5, -3, -6])
// );

// bring negative to front and positive to end

//this method the order of negative elements but not the
// order of possitiv elements
function negativeFirstAndPositiveEnd(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      reverseArray(arr, index, i);
      index++;
    }
  }

  // console.log(arr);
}
// negativeFirstAndPositiveEnd([12, 11, -13, -5, 6, -7, 5, -3, -6]);

// bring negative to front and positive to end

//this method solves the question
// in O(n) space which is not ideal
//  so we will optimize it
function negativeFirstAndPositiveEnd3(arr) {
  let combined = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      combined.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      combined.push(arr[i]);
    }
  }

  return combined;
}

// negativeFirstAndPositiveEnd3([12, 11, -13, -5, 6, -7, 5, -3, -6])

function rotateArrayClockWiseHelperFn(arr, start, end, k = 1) {
  let p = 0;

  while (p < k) {
    let temp = arr[end];
    for (let i = end; i >= start; i--) {
      arr[i] = arr[i - 1];
    }
    arr[start] = temp;
    p++;
  }
}

function negativeFirstAndPositiveEnd4(arr) {
  let negativeIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      rotateArrayClockWiseHelperFn(arr, negativeIndex, i, 1);
      negativeIndex++;
    }
  }

  return arr;
}

// console.log(negativeFirstAndPositiveEnd4([12, 11, -13, -5, 6, -7, 5, -3, -6]));

//move all negative elements to end with extra space allowed
// the space complexity of this approach is O(n)

function negativeToEnd(arr) {
  let combined = [];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      combined[k] = arr[i];
      k++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      combined[k] = arr[i];
      k++;
    }
  }
  return combined;
}

// let start = performance.now();
// negativeToEnd([1, -1, 3, 2, -7, -5, 11, 6]);
// let end = performance.now();
// console.log("O(n) space", end - start, "\n");

function rotateArrAntiClockWiseHelper(arr, start, end, k = 1) {
  let p = 0;

  while (p < k) {
    let temp = arr[start];
    for (let i = start; i < end; i++) {
      arr[i] = arr[i + 1];
    }
    arr[end] = temp;
    p++;
  }
}

function negativeToEnd2(arr) {
  let negativesIndex = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      rotateArrAntiClockWiseHelper(arr, i, negativesIndex);
      negativesIndex--;
    }
  }
  return arr;
}

// let start2 = performance.now();
// negativeToEnd2([1, -1, 3, 2, -7, -5, 11, 6]);
// let end2 = performance.now();
// console.log("constant space", end2 - start2);

// reArrangeInHighestAndSmallest([10, 9, 8, 7, 6]);

//finding largest sum contigous array
//using kaden`s algoritmn
function largestSumContigiousArray(arr) {
  let curr = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    curr = curr + arr[i];

    if (curr > max) {
      max = curr;
    }
    if (curr < 0) {
      curr = 0;
    }
  }

  return max;
}

// largestSumContigiousArray([ -2, -3, 4, -1, -2, 1, 5, -3 ])

//find subarray with least average

function subArrayWithLeastAverage(arr, k) {
  let start = 0;
  let avg = 0;
  let avgNow = 0;
  let index = 0;
  let temp = k;
  let leastAvg = arr[arr.length - 1];

  while (start < k) {
    avg = avg + arr[start];
    start++;

    if (start === k && k <= arr.length) {
      start = start - 2;
      avgNow = avg / temp;

      avg = 0;

      k++;

      if (avgNow < leastAvg) {
        leastAvg = avgNow;
        index = start;
      }
    }
  }

  if (temp === 2) {
    return [arr[index - 1], arr[index]];
  } else if (temp === 3) {
    return [arr[index - 1], arr[index], arr[index + 1]];
  }
}

// subArrayWithLeastAverage([3, 7, 90, 20, 10, 50, 40],3)
// subArrayWithLeastAverage([20, 3, 13, 5, 10, 14, 8, 5, 11, 9, 1, 11],9)

// subArrayWithLeastAverage([20, 3, 13, 5, 10, 14, 8, 5, 11, 9, 1, 11],9)

function minimumDistance(arr, x, y) {
  let minimumDistance = 0;
  let point1 = 0;
  let point2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      point1 = i;
    } else if (arr[i] === y) {
      point2 = i;
    }
  }

  minimumDistance = Math.abs(point1 - point2);

  return minimumDistance;
}

minimumDistance([3, 6, 9, 10, 44, 66, 0], 9, 66);

//minimize the maximum difference b/w the heights

function maximumDifference(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + k;
  }
  console.log(arr);
}

// maximumDifference([1, 15, 10], 6);

//sort an array of 0 1 and 2
//the below method sorts the array in O(n)
// and space complexity of O(1)
function sort012(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      let temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      let temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }

  return arr;
}
sort012([0, 1, 2, 0, 1, 2]);

//treat arrays as sets and return union of two unsorted arrays and
// intersection
// this method is not very effecient its time compelxity
function FindUnion(arr1, arr2) {
  let newArr = [];
  let newSet = new Set();

  for (let i = 0; i < arr1.length; i++) {
    newSet.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    newSet.add(arr2[i]);
  }

  newSet.forEach((s) => {
    newArr.push(s);
  });

  newArr.sort(function (a, b) {
    return a - b;
  });
  return newArr;
}

let arr1 = [1, 2, 5, 6, 2, 3, 5, 7, 3];
let arr2 = [2, 4, 5, 6, 8, 9, 4, 6, 5, 4];

function findIntersection(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr2[j]);
      }
    }
  }

  return newArr;
}

function minimizeTheDifference(arr, k) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let diff = arr[arr.length - 1] - arr[0];
  let min;
  let max;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - k < 0) continue;

    max = Math.max(arr[i - 1] + k, arr[arr.length - 1] - k);
    min = Math.min(arr[i] - k, arr[0] + k);

    diff = Math.min(diff, max - min);
  }

  return diff;
}

minimizeTheDifference([1, 15, 10], 6);

//
//find the minimum no of jumps to go from start to end
// of array
//

function minimumNoOfJumpsToReachEnd(arr) {
  let pos = 0;
  let dest = 0;
  let jump = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    dest = Math.max(dest, arr[i] + i);

    if (pos === i) {
      pos = dest;
      jump++;
    }
  }

  return jump;
}

minimumNoOfJumpsToReachEnd([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]);
minimumNoOfJumpsToReachEnd([2, 0, 3, 1, 1, 1, 1, 10]);
minimumNoOfJumpsToReachEnd([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

//
// find duplicates in an array
//

// this method finds duplicates in time complexity
//  of O(n * n) so we will optimize it.
function findDuplicates(arr) {
  let index = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        index.push(arr[i]);
      }
    }
  }

  return index.join(" ");
}

// console.log(findDuplicates([1, 2, 3, 6, 3, 6, 1]));

// findDuplicates([1, 2, 3, 4, 3]);

//find duplicate in an array of n + 1 integers
//this solution finds the duplicate in time
// complexity of O(n)
function findDuplicateInNPlusOne(arr, n) {
  for (let i = 0; i < n; i++) {
    let index = Math.abs(arr[i]);

    if (arr[index] < 0) return index;

    arr[index] = -arr[index];
  }
  return -1;
}

let arrNew = [3, 1, 3, 4, 2];
// console.log(findDuplicateInNPlusOne(arrNew, arrNew.length));

// merge two sorted arrays
// the space and time complexity of this solution is O(N + M)
// where m and n are the lengths of both the arrays respectively
function mergeTwoSortedArrays(arr1, arr2) {
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

// console.log(mergeTwoSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));

//the time complexity of this solution in O(nlogn + mlogm)
//  and space is O(n)
function mergeTwoSortedArrays2(arr1, arr2) {
  let myMap = new Map();

  for (let i = 0; i < arr1.length; i++) {
    myMap.set(arr1[i], true);
  }
  for (let i = 0; i < arr2.length; i++) {
    myMap.set(arr2[i], true);
  }

  let arr = [];

  for (const key of myMap.keys()) {
    arr.push(key);
  }

  arr.sort();
  return arr;
}

// console.log(mergeTwoSortedArrays2([1, 3, 5, 7], [2, 4, 6, 8]));

// mergeTwoSortedArrays([5, 8, 9], [4, 7, 8]);

//merging two sorted arrays without using extra space

function handleArrayTwo(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
  }
  return arr;
}
// merging two sorted arrays in constant space
function mergeTwoSortedArraysWithoutSpace(arr1, arr2) {
  let i = 0;
  let j = 0;

  while (i < arr1.length) {
    if (arr1[i] > arr2[j]) {
      let temp = arr1[i];
      arr1[i] = arr2[j];
      arr2[j] = temp;
      handleArrayTwo(arr2);
    }
    i++;
  }
  console.log(arr1, arr2);
}

mergeTwoSortedArraysWithoutSpace([1, 3, 4, 5, 7], [2, 4, 6, 8, 21]);
