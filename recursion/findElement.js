function findElement(arr, target, index) {
  if (target === arr[index]) return index;

  return findElement(arr, target, index + 1);
}
let start = performance.now();
console.log(findElement([2, 4, 5, 6, 8, 13, 16, 18, 19, 23], 18, 0));
let end = performance.now();

console.log(end - start);
