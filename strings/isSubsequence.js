function issubsequence(s1, s2) {
  let n = s1.length,
    m = s2.length;
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (s1[i] == s2[j]) i++;
    j++;
  }
  /*If i reaches end of s1,that mean we found all
	characters of s1 in s2,
	so s1 is subsequence of s2, else not*/
  return i == n;
}

// driver code

let s1 = "abc";
let s2 = "ahbgdc";
console.log(issubsequence(s1, s2));
