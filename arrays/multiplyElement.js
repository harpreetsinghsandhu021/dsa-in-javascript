// replacing each element with i - 1 * i + 1
function multiplyElement(arr) {
  console.log(arr);
  let prev = arr[0];
  let secondLast = arr[arr.length - 2];
  arr[0] = arr[0] * arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    let curr = arr[i];
    arr[i] = prev * arr[i + 1];
    prev = curr;
  }

  arr[arr.length - 1] = secondLast * arr[arr.length - 1];

  return arr;
}
