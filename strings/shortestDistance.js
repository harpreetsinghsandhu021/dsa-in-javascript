const shortestToChar = function (s, c) {
  let list = [];

  let res = [];

  let len = s.length;

  for (let i = 0; i < len; i++) {
    if (s[i] == c) {
      list.push(i);
    }
  }

  console.log(list);

  let p1, p2, v1, v2;

  let l = list.length - 1;

  p1 = 0;
  p2 = l > 0 ? 1 : 0;

  for (let i = 0; i < len; i++) {
    v1 = list[p1];
    v2 = list[p2];

    if (i <= v1) {
      res.push(v1 - i);
    } else if (i <= v2) {
      if (i - v1 < v2 - i) {
        res.push(i - v1);
      } else {
        res.push(v2 - i);
        p1 = p2;
        p2 = p2 < l ? p2 + 1 : p2;
      }
    } else {
      res.push(i - v2);
    }
  }
  return res;
};

console.log(shortestToChar("loveleetcode", "e"));
