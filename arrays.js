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
  //   console.log(temp);
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
  console.log(arr);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

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

  console.log(arr);
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

  console.log(arr);
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
    console.log(arr[index]);
  } else {
    console.log("no majority element found!!");
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
    console.log(arr[index]);
  } else {
    console.log("no majority element found!!");
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
    console.log(arr[index]);
  } else {
    console.log("no majority element found!!");
  }
}

// majorityElements3([9, 9, 8, 8, 8, 8]);

// ROTATING array clockwise using reversal algorithmn
function clockWiseRotationUsingReversal(arr, d) {
  let n = arr.length - 1;

  reverseArray(arr, 0, n - d);
  reverseArray(arr, n - d, d);
  reverseArray(arr, 0, n);

  console.log(arr);
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

  console.log(combined);
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

  console.log(arr);
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
  console.log(arr);
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
  console.log(combined);
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

  console.log(arr);
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

  console.log(arr);
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

  console.log(arr);
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

  console.log(arr.join(""));
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

  console.log(min);
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

  console.log(arr);
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

  console.log(arr);
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
  console.log(arr);
}

// negativeToFrontAndPositiveToEnd([12, 11, -13, -5, 6, -7, 5, -3, -6])

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
// negativeFirstAndPositiveEnd([12, 11, -13, -5, 6, -7, 5, -3, -6])

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

  console.log(combined);
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
  console.log(combined);
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
  console.log(arr);
}

// let start2 = performance.now();
// negativeToEnd2([1, -1, 3, 2, -7, -5, 11, 6]);
// let end2 = performance.now();
// console.log("constant space", end2 - start2);

// ReArrange array in the following fashion
// [smallest,highest,secondSmallest,secondHighest,thirdSmallest,thirdHighest]

function reArrangeInHighestAndSmallest(arr) {
  let curr = 0;
  let min = arr[0];
  let max = arr[0];
  let secondMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    curr = arr[i];

    if (max < curr) {
      secondMax = max;
      max = curr;
    } else if (secondMax < curr) {
      secondMax = curr;
    }

    if (curr < min) {
      min = curr;
    }
  }
  console.log(max, min, secondMax);
}

// reArrangeInHighestAndSmallest([10, 9, 8, 7, 6]);


//finding largest sum contigous array
//using kaden`s algoritmn
function largestSumContigiousArray(arr){
let curr = 0
let max = 0
  for(let i = 0;i < arr.length;i++){
    curr = curr + arr[i]

    if(curr > max){
      max = curr
    }
    if(curr < 0){
      curr = 0

    }


  }

  console.log(max)

}


// largestSumContigiousArray([ -2, -3, 4, -1, -2, 1, 5, -3 ])




//find subarray with least average


function subArrayWithLeastAverage(arr,k){

  let start = 0
  let avg = 0
  let avgNow = 0
  let index  = 0
  let temp  = k
  let leastAvg = arr[arr.length -  1]

  while(start < k){
  
    avg = avg + arr[start]
    start++
   
    if(start === k && k <= arr.length){
      start = start - 2
      avgNow = avg / temp
      
      avg = 0
      
      k++

      if(avgNow < leastAvg){
        leastAvg = avgNow
        index = start
      }

    }
  
  }

  if(temp === 2){
    console.log([arr[index - 1],arr[index]]);

  }else if(temp === 3){

    console.log([arr[index - 1],arr[index],arr[index + 1]]);
  }

  

}

subArrayWithLeastAverage([3, 7, 90, 20, 10, 50, 40],3)
subArrayWithLeastAverage([3, 7, 5, 20, -10, 0, 12],2)

// subArrayWithLeastAverage([20, 3, 13, 5, 10, 14, 8, 5, 11, 9, 1, 11],9)

