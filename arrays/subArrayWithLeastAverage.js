// console.log(largestSumContigiousArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
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
