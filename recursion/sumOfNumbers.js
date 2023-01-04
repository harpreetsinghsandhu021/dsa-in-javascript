function sumOfNumbers(n) {
  if (n === 1) return 1;

  return n + sumOfNumbers(n - 1);
}

console.log(sumOfNumbers(5));
