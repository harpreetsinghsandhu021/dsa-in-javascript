function addBinary(a, b) {
  // Initialize result
  let result = [];

  // Initialize digit sum
  let s = 0;

  // Traverse both strings starting
  // from last characters
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || s == 1) {
    // Comput sum of last
    // digits and carry
    s += i >= 0 ? a[i].charCodeAt() - "0".charCodeAt() : 0;
    s += j >= 0 ? b[j].charCodeAt() - "0".charCodeAt() : 0;

    // If current digit sum is
    // 1 or 3, add 1 to result
    // result += String(s % 2);
    result.unshift(s % 2);

    // Compute carry
    s = parseInt(s / 2);

    // Move to next digits
    i--;
    j--;
  }

  return result.join("");
}

//Driver code
let a = "10",
  b = "1";

console.log(addBinary(a, b));
