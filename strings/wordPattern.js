var wordPattern = function (pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < pattern.length; i++) {
    // if (
    //   (map1.has(pattern[i]) && map1.get(pattern[i]) !== words[i]) ||
    //   (map2.has(words[i]) && map2.get(words[i]) !== pattern[i])
    // ) {
    //   return false;
    // }

    map1.set(pattern[i], words[i]);
    map2.set(words[i], pattern[i]);
  }

  console.log(map1, map2);

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
