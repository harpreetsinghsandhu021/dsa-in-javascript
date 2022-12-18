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
