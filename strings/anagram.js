function checkAnagram(str1, str2) {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  return str1 === str2;
}
function checkAnagram2(s, t) {
  if (s.length === t.length) {
    var map_s = {};
    var map_t = {};
    for (let i = 0; i < s.length; i++) {
      map_s[s[i]] = (map_s[s[i]] || 0) + 1;
      map_t[t[i]] = (map_t[t[i]] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
      if (map_s[s[i]] !== map_t[s[i]]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// console.log(checkAnagram("anagram", "nagaram"));
// console.log(checkAnagram("rat", "car"));
// console.log(checkAnagram2("anagram", "nagaram"));
// console.log(checkAnagram2("rat", "car"));
console.log(checkAnagram2("aacc", "ccac"));
