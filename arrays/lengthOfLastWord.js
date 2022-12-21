function lengthOfLastWord(str) {
  str = str.trim().replaceAll("  ", " ");
  str = str.split(" ");
  return str[str.length - 1].length;
}

console.log(lengthOfLastWord("VPtCBexbhyOqEHWMpF  VJOZpC"));
