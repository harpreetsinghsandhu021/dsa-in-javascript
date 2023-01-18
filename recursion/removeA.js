function removeA(str) {
  let ans = "";
  let start = 0;
  return helper(str, ans, start);
}

function helper(str, ans, start) {
  if (start === str.length) return ans;

  if (str[start] != "a") {
    ans += str[start];
  }
  return helper(str, ans, start + 1);
}

console.log(removeA("baccad"));
