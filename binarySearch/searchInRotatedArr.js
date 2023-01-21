function search(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let pivot = findPivot(arr, start, end);

  if (arr[pivot] === target) return pivot;
  if (arr[start] === target) return start;
  if (arr[end] === target) return end;

  if (pivot === -1) {
    return binarySearch(arr, target, start, end);
  }

  let ans = binarySearch(arr, target, start, pivot - 1);

  if (ans !== -1) {
    return ans;
  } else {
    return binarySearch(arr, target, pivot + 1, end);
  }
}

function findPivot(arr, start, end) {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    // case I : if mid element is greater than mid + 1 element
    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    // case II : if mid - 1 element is greater than mid element
    if (mid > start && arr[mid - 1] > arr[mid]) {
      return mid - 1;
    }

    // case III : if start element is greater than mid element
    // then search in second half otherwise search in first half
    if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function binarySearch(arr, target, start, end) {
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

let arr = [5, 1, 2, 3, 4];
let key = 1;
console.log(search(arr, key));
