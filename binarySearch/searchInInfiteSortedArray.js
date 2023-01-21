// find an element in an infinite sorted array
// which means we are not allowed to use arr.length to get the
// the size
// source https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

function searchInInfiteArray(arr, target) {
  let start = 0;
  let end = 1;

  while (target > arr[end]) {
    let temp = end + 1;

    end = end + (end - start + 1) * 2;
    start = temp;
  }

  return search(arr, start, end, target);
}
function search(arr, start, end, target) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
console.log(
  searchInInfiteArray([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], 10)
);
