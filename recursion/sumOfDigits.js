// 1342
// 1 + 3 + 4 + 2
// 10

function sumOfDigits(number) {
  if (number === 1) return 1;

  return (number % 10) + sumOfDigits(Math.floor(number / 10));
}

// console.log(sumOfDigits(1342));

function fun(n) {
  if (n === 0) return;
  console.log(n);

  fun(--n);
}
// fun(5);
