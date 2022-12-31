function countSubstring(S, n) {
  let i = 0;
  let ans = 0;

  while (i < n) {
    let count0 = 0;
    let count1 = 0;
    if (S.charAt(i) === "0") {
      while (i < n && S.charAt(i) === "0") {
        count0++;
        i++;
      }

      let j = i;

      while (j < n && S.charAt(j) === "1") {
        count1++;
        j++;
      }
    } else {
      while (i < n && S.charAt(i) === "1") {
        count1++;
        i++;
      }

      let j = i;

      while (j < n && S.charAt(j) === "0") {
        count0++;
        j++;
      }
    }
    ans += Math.min(count0, count1);
  }
  return ans;
}

let S = "00110011";
let n = S.length;

console.log(countSubstring(S, n));
