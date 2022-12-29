function checkVowel(l) {
  return (
    l === "a" ||
    l === "A" ||
    l === "e" ||
    l === "E" ||
    l === "i" ||
    l === "I" ||
    l === "o" ||
    l === "O" ||
    l === "u" ||
    l === "U"
  );
}

function reverseVowels(str) {
  let start = 0;
  let end = str.length - 1;
  str = str.split("");

  while (start < end) {
    if (!checkVowel(str[start])) {
      start++;
      continue;
    }
    if (!checkVowel(str[end])) {
      end--;
      continue;
    }

    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;

    start++;
    end--;
  }
  console.log(str.join(""));
}

reverseVowels("leetcode");
