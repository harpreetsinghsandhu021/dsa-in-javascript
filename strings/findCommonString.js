function findCommonStringWithMinimumIndex(list1, list2) {
  if (list1.length == 0 || list2.length == 0) return [""];
  let map = new Map();
  for (let i = 0; i < list1.length; i++) map.set(list1[i], i);

  let min = Number.MAX_SAFE_INTEGER;

  let res = [];
  let total;
  for (let j = 0; j < list2.length; j++) {
    if (map.has(list2[j])) {
      total = j + map.get(list2[j]);

      if (total < min) {
        res = [];
        res.push(list2[j]);
        min = total;
      } else if (total == min) {
        res.push(list2[j]);
      }
    }
  }
  return res;
}

let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
let list2 = ["KFC", "Shogun", "Burger King"];

console.log(findCommonStringWithMinimumIndex(list1, list2));
