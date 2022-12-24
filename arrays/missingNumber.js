function missingNumber(arr) {
  arr.sort();
  let missingNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      missingNumber = i;
    }
  }

  return missingNumber;
}

// console.log(missingNumber([3, 0, 1]));

function missingNumber2(arr) {
  let n = arr.length;

  let sum = (n * (n + 1)) / 2;
  let currSum = 0;

  for (let i = 0; i < n; i++) {
    currSum += arr[i];
  }

  return sum - currSum;
}

console.log(missingNumber2([3, 0, 1]));
