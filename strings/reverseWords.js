// reverse words in a string

function reverseWords(s) {
  s = s.split(/\s+/);
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }

  s = s.join(" ");

  return s;
}

console.log(reverseWords("God Ding"));
