// console.log(KthSmallestElement([3, 2, 1], 1));
function findSecondHighest(arr) {
  let max = arr[0];
  let cur;
  let secondHighest = 0;

  for (let i = 0; i < arr.length; i++) {
    cur = arr[i];
    if (cur > max) {
      secondHighest = max;
      max = cur;
    } else if (cur > secondHighest) {
      if (max != cur) {
        secondHighest = cur;

      }
    }

  }

  return secondHighest;
}
console.log(findSecondHighest([12, 35, 1, 10, 34, 1]));
