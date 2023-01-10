function nextGreatestAlphabet(alphabets, K) {
  var l = 0,
    r = alphabets.length - 1;
  var ans = -1;

  while (l <= r) {
    var mid = (l + r) / 2;

    if (alphabets[mid] > K) {
      ans = mid;
      r = mid - 1;
    } else l = mid + 1;
  }

  return alphabets[ans];
}

var letters = ["c", "f", "j"];
var K = "a";

let start = performance.now();
console.log(nextGreatestAlphabet(letters, K));
let end = performance.now();
console.log(end - start);
