function uniqueMorseCodeWords(words) {
  let codes = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("");

    for (var j = 0; j < words[i].length; j++) {
      words[i][j] = codes[words[i][j]];
    }
  }

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].join("");
  }

  let count = 0;
  let map = {};

  for (let i = 0; i < words.length; i++) {
    if (!map[words[i]]) {
      map[words[i]] = true;
      count++;
    } else {
    }
  }
  return count;
}

let start = performance.now();
console.log(uniqueMorseCodeWords(["gin", "zen", "gig", "msg"]));
let end = performance.now();
console.log(end - start);

function uniqueMorseRep(arr) {
  var morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  var st = new Set();

  var N = arr.length;

  for (var i = 0; i < N; i++) {
    var temp = "";

    var M = arr[i].length;

    for (var j = 0; j < M; j++) {
      temp += morseCode[arr[i][j].charCodeAt() - "a".charCodeAt()];
    }

    st.add(temp);
  }

  return st.size;
}

let start2 = performance.now();
console.log(uniqueMorseRep(["gin", "zen", "gig", "msg"]));
let end2 = performance.now();

console.log(end2 - start2);
