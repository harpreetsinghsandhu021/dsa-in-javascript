function skipWord(str) {
  let ans = [];
  let start = 0;
  str = str.split(" ");
  return helper(str, ans, start);
}

function helper(str, ans, start) {
  if (start === str.length) return ans.join(" ");
  if (str[start] != "apple") {
    ans.push(str[start]);
  }
  return helper(str, ans, start + 1);
}

console.log(skipWord("not just an apple it a medicare"));
