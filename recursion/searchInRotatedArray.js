const searchHelper = (arr, target, start, end) => {
  if (arr[start] === target) return start;
  if (arr[end] === target) return end;
  if (start > end) return -1;
  let mid = Math.floor(start + (end - start) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[start] <= arr[mid]) {
    if (target >= arr[start] && target <= arr[mid]) {
      return searchHelper(arr, target, start, mid - 1);
    } else {
      return searchHelper(arr, target, mid + 1, end);
    }
  }

  if (target <= arr[end] && target >= arr[mid]) {
    return searchHelper(arr, target, mid + 1, end);
  }

  return searchHelper(arr, target, start, mid - 1);
};

var search = function (nums, target) {
  return searchHelper(nums, target, 0, nums.length - 1);
};

let arr = [4, 5, 6, 7, 0, 1, 2];
let n = arr.length;
let key = 1;
console.log(search(arr, key));
