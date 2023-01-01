function rotateString(s, goal) {
  s = s.split("");

  let start = 0;
  let end = s.length;

  while (start < end) {
    let temp = s[0];
    for (let i = 0; i < s.length; i++) {
      s[i] = s[i + 1];
    }
    s[s.length - 1] = temp;
    if (s.join("") === goal) return true;
    start++;
  }

  return false;
}

console.log(rotateString("abcde", "abced"));
