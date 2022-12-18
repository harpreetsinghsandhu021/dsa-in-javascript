//
//find the minimum no of jumps to go from start to end
// of array
//
function minimumNoOfJumpsToReachEnd(arr) {
  let pos = 0;
  let dest = 0;
  let jump = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    dest = Math.max(dest, arr[i] + i);

    if (pos === i) {
      pos = dest;
      jump++;
    }
  }

  return jump;
}
// minimumNoOfJumpsToReachEnd([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]);
// minimumNoOfJumpsToReachEnd([2, 0, 3, 1, 1, 1, 1, 10]);
// minimumNoOfJumpsToReachEnd([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(minimumNoOfJumpsToReachEnd([0, 1, 1, 1, 1]));
