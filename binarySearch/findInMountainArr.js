function findInMountainArr(mountainArr, target) {
  let start = 0;
  let end = mountainArr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (mountainArr[mid] < mountainArr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  let peak = start;

  if (mountainArr[peak] === target) return peak;

  let found = search(mountainArr, 0, peak, target);

  if (found !== -1) {
    return found;
  } else {
    return search(mountainArr, peak, mountainArr.length - 1, target);
  }
}

function search(arr, start, end, target) {
  let isAscending = arr[start] < arr[end];

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (isAscending) {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
}

// console.log(findInMountainArr([0, 1, 2, 4, 2, 1], 3));
// console.log(findInMountainArr([1, 5, 2], 2));
console.log(findInMountainArr([1, 2, 3, 4, 5, 3, 1], 2));
