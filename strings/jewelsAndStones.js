function jewelsAndStones(jewels, stones) {
  let map = {};

  for (let i = 0; i < jewels.length; i++) {
    map[jewels[i]] = true;
  }

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (map[stones[i]]) {
      count++;
    }
  }

  return count;
}

let jewels = "z";
let stones = "ZZ";

console.log(jewelsAndStones(jewels, stones));
