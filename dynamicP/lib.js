function devy(n, memo = {}) {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;

  memo[n] = devy(n - 1, memo) + devy(n - 2, memo);

  return memo[n];
}

function fib(n) {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(5));
// console.log(fib(6));

// let start2 = performance.now();
// console.log(fib(4));
// let end2 = performance.now();
// console.log("fib", end2 - start2);

// let start = performance.now();
// console.log(devy(50));
// let end = performance.now();
// console.log("devy", end - start);

function findItemsInCommon(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
}

function findItemsInCommon2(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  console.log(obj);
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// let start = performance.now();
// console.log(findItemsInCommon([5, 23, 67, 64], [20, 56, 3, 5, 67]));
// let end = performance.now();
// console.log("not-opt", end - start);

// let start2 = performance.now();
// console.log(findItemsInCommon2([5, 23, 63, 64], [20, 56, 3, 67, 23]));
// let end2 = performance.now();
// console.log("opt", end2 - start2);

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(80));

// console.log("f".charCodeAt() - "F".charCodeAt());

function makeItGood(string) {
  let str = [];

  for (let i = 0; i < string.length; i++) {
    if (
      str.length &&
      Math.abs(string[i].charCodeAt() - str[str.length - 1].charCodeAt()) === 32
    ) {
      str.pop();
    } else {
      str.push(string[i]);
    }
  }
  console.log(str.join(""));
}

// makeItGood("leEeetcode");
// makeItGood("abBAcC");

function containsDuplicate(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
}

// console.log(containsDuplicate([1,2,3]))

function maxSumSubArray(arr) {
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

// console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(15&1)
let a = 5;
let b = 6;
// console.log(a, b);

a = a ^ b;
b = a ^ b;
a = a ^ b;

// console.log(a,b);

/// find the only non-repeating element in an array where every element repeats twice

// const arr = [5, 4, 1, 4, 3, 5, 1];
// let res = 0;
// for (i = 0; i < arr.length; i++) {
//   res = res ^ arr[i];
// }
// console.log(res);

// find the two non-repeating elements in an array where every element repeats twice

function findTwoUniqueNumbers(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res = res ^ arr[i];
  }

  let number1 = 0;
  let number2 = 0;

  for (let j = 0; j < arr.length; j++) {

    if ((arr[j] & res) > 0) {
      number1 = number1 ^ arr[j];
    } else {
      number2 = number2 ^ arr[j];
    }
  }
  console.log(number1, number2);
}

// findTwoUniqueNumbers([5, 4, 1, 4, 3, 5, 1, 2]);

function factorial(n) {
  let sum = 1;

  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  // console.log(sum);
}

function noOfZeroes(n) {
  let res = 0;

  for (let i = 5; i <= n; i = i * 5) {
    res = res + Math.floor(n / i);
  }
  return res;
}
// console.log(noOfZeroes(20));

function palindromeNumber(n) {
  let temp = n;
  let final = 0;
  let remainder;

  while (n > 0) {
    remainder = n % 10;
    final = final * 10 + remainder;
    n = parseInt(n / 10);
  }

  if (final === temp) {
    return true;
  } else {
    return false;
  }
}

// console.log(palindromeNumber(363)
let rows = 6;
let str = "";
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < i; j++) {
    str += "* ";
  }
  str += "\n";
}

// return prime numbers from 1 to n
function sieveOfEratoSthnes(n) {
  let isPrime = new Array(n + 1);
  isPrime.fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    for (let j = 2 * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
  return isPrime;
}

// console.log(sieveOfEratoSthnes(20));

function fastPower(a, b) {
  let res = 1;

  while (b > 0) {
    if (b & (1 != 0)) {
      res = res * a;
    }
    a = a * a;
    b = b >> 1;
  }

  return res;
}
// console.log(fastPower(2.00333wjjmumujuki,uu000, -2));
// console.log(BigInt(21309223098908083));

function power(a, b) {
  if (b === 0) return 1;

  return power(a, b - 1) * a;
}
// console.log(power(2, 3));

const twoDArray = new Array(4);

for (let i = 0; i < twoDArray.length; i++) {
  twoDArray[i] = new Array(4);
  twoDArray[i].fill("0");
}
// console.log(twoDArray);

function printStars(row) {
  let str = "";

  for (let i = 1; i <= row; i++) {
    for (let s = 0; s < row - i; s++) {
      str += " ";
    }
    for (let j = 0; j < i; j++) {
      str += "#";
    }

    str += "\n";
  }

  return str;
}

// console.log(printStars(6));

function secondHighest(arr) {
  let cur;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    cur = arr[i];

    if (cur > max) {
      max = cur;
    }
  }

  let left = arr.filter((i) => i !== max);

  let sec = 0;
  let secCurr;
  for (let k = 0; k < left.length; k++) {
    secCurr = left[k];

    if (secCurr > sec) {
      sec = secCurr;
    }
  }

  return sec;
}

function findLargestAndSmallest(arr) {
  let max = arr[0];
  let cur;
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    cur = arr[i];
    if (cur > max) {
      max = cur;
    }

    if (cur < min) {
      min = cur;
    }
  }

  return { max, min };
}

function findsecondHighest(arr) {
  let max = arr[0];
  let secHgh = arr[0];
  let cur;

  for (let i = 0; i < arr.length; i++) {
    cur = arr[i];

    if (cur > max) {
      secHgh = max;
      max = cur;
    } else if (cur > max) {
      secHgh = cur;
    }
  }

  return secHgh;
}

// console.log(noOfCharacters())

// const arr = [4, -4, -5, -6, -7, 8, -8];

// const arr = [3, 4, 3, 3, 2, 4, 5, 4, 3, 4];
// const arr = [34, 56, 23, 88, 90];
// const arr = [5, 4, 3, 2, 1];

//  console.log(secondHighest(arr))
// console.log(findLargestAndSmallest(arr))
// console.log(findsecondHighest(arr));
// findsecondHighest(arr)


// diagonalDifference(arr2);

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let combined = [];

  while (i < arr1.length && j < arr2.length) {
    if (+arr1[i] < +arr2[j]) {
      combined.push(+arr1[i]);
      i++;
    } else {
      combined.push(+arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    combined.push(+arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combined.push(+arr2[j]);
    j++;
  }

  return combined;
}

// function bigSort(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }

function bigSort(arr) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(bigSort(left), bigSort(right));
}

// console.log(
//   bigSort(["1", "10", "3", "3", "31415926535897932384626433832795", "5"])
// );
// console.log(bigSort([56, 5, 90, 55]));

function majorityElements(arr) {
  let maxCount = 0;
  let index = -1;
  let count;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }

  if (maxCount > Math.floor(arr.length >> 1)) {
    return arr[index];
  } else {
    return "no element found";
  }
}

function majorityElements2(arr) {
  //sorts the array in O(nlogn)
  arr.sort(function (a, b) {
    return a - b;
  });

  // console.log(arr);

  let temp = arr[0];
  let count = 1;
  let maxCount = 0;
  let index = -1;

  for (let i = 1; i < arr.length; i++) {
    if (temp === arr[i]) {
      count++;
    } else {
      count = 1;
      temp = arr[i];
    }

    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }
  console.log(maxCount);

  if (maxCount > Math.floor(arr.length / 2)) {
    return arr[index];
  } else {
    return "no majority element found!";
  }
}

// majority element using moore`s voting algorithmn

function majorityElements3(arr) {
  let count = 1;
  let answerIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[answerIndex]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      answerIndex = i;
      count = 1;
    }
  }

  // verifiying the candidate from the above returned candidate
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[answerIndex]) {
      maxCount++;
    }
  }

  if (maxCount > Math.floor(arr.length >> 1)) {
    return arr[answerIndex];
  } else {
    return "no majority element found!!";
  }
}

// console.log(majorityElements3([]));
// console.log(majorityElements2([89, 44, 66, 44, 34, 44, 44, 44]));
// console.log(majorityElements3([89, 44, 66, 44, 34, 44, 44, 44]));


