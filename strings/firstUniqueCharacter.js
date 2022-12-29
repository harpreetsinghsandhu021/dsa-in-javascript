function firstUniqueCharacter(s) {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]] = obj[s[i]] + 1;
    }
  }

  let letter = "";
  for (const count in obj) {
    if (obj[count] === 1) {
      letter = count;
      break;
    }
  }

  if (letter === "") {
    return -1;
  } else {
    return s.indexOf(letter);
  }
}

// console.log(firstUniqueCharacter("leetcode"));

// console.log(firstUniqueCharacter("loveleetcode"));
// console.log(firstUniqueCharacter("aabb"));
// console.log(firstUniqueCharacter("bd"));
// console.log(firstUniqueCharacter("dddccdbba"));
