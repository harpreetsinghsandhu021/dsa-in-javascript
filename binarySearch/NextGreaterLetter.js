function nextGreatestAlphabet(alphabets, target) {
  let start = 0;
  let end = alphabets.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target >= alphabets[mid]) {
      start = mid + 1;
    } else if (target <= alphabets[mid]) {
      end = mid - 1;
    }
  }
  if (alphabets[start] != undefined) {
    return alphabets[start];
  } else {
    return alphabets[0];
  }
}

var letters = ["x", "x", "y", "y"];
var K = "z";

console.log(nextGreatestAlphabet(letters, K));
