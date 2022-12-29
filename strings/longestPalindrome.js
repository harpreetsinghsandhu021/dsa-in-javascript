const longestPalindrome = function (s) {
  const map = {};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(map);

    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else if (map[s[i]] === 1) {
      map[s[i]] = undefined;
      result += 2;
    }
  }
  console.log(map);

  if (s.length > result) {
    result += 1;
  }
  return result;
};

console.log(longestPalindrome("abccccdd"));
