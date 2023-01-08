function search(arr, s, e, key) {
  if (s < e) return -1;
  if (s == e) return e;
  let m = Math.floor((s + e) / 2);

  if (arr[m] === key) {
    return m;
  }

  if (arr[s] < arr[m]) {
    if (key >= arr[s] && key <= arr[m]) {
      return search(arr, s, m - 1, key);
    } else {
      return search(arr, m + 1, e, key);
    }
  }

  if (key <= arr[e] && key >= arr[m]) {
    return search(arr, m + 1, e, key);
  }

  return search(arr, s, m - 1, key);
}

let arr = [4, 5, 6, 7, 0, 1, 2];
let n = arr.length;
let key = 3;
console.log(search(arr, 0, n, key));
