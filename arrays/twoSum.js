// JavaScript program to check if given array
// has 2 elements whose sum is equal
// to the given value

function printpairs(arr, sum) {
  let s = {};

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let temp = sum - val;

    if (s[temp] !== undefined) {
      return [s[temp], i];
    } else {
      s[val] = i;
    }
  }
}

// Driver Code

let A = [2, 7, 11, 15];
let n = 9;
console.log(printpairs(A, n));
