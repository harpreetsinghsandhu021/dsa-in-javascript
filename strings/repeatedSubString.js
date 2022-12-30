function repeatedSubString(s) {
  let str = s + s;
  console.log(str);

  let newStr = str.substring(1, str.length - 1);
  console.log(newStr);

  if (newStr.includes(s)) {
    return true;
  } else {
    return false;
  }
}

console.log(repeatedSubString("abab"));
