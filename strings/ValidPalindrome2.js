function isPalindrome(str, low, high) {
  while (low < high) {
    if (str.charAt(low) != str.charAt(high)) return false;
    low++;
    high--;
  }
  return true;
}

function possiblePalinByRemovingOneChar(str) {
  let low = 0;
  let high = str.length - 1;

  while (low < high) {
    if (str.charAt(low) == str.charAt(high)) {
      low++;
      high--;
    } else {
      if (isPalindrome(str, low + 1, high)) return low;

      if (isPalindrome(str, low, high - 1)) return high;
      return -1;
    }
  }

  return -2;
}

var str = "abac";
var idx = possiblePalinByRemovingOneChar(str);
if (idx == -1) console.log("Not Possible");
else if (idx == -2) console.log("Possible without " + "removing any character");
else console.log("Possible by removing" + " character at index " + idx);
