function detectUppercaseUse(word) {
  for (let i = 1; i < word.length; i++) {
    if (
      word[i].charCodeAt() - "A".charCodeAt() < 32 &&
      word[i - 1].charCodeAt() - "A".charCodeAt() >= 32
    ) {
      return false;
    } else if (
      word[i].charCodeAt() - "A".charCodeAt() >= 32 &&
      word[i - 1].charCodeAt() - "A".charCodeAt() < 32
    ) {
      if (i - 1 == 0) continue;

      return false;
    }
  }

  return true;
}

let S = "Leetcode";
console.log(detectUppercaseUse(S) ? "Yes" : "No");
