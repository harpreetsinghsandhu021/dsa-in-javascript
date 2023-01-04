let ans = 0;

function reverseNumber(number) {
  if (number === 0) return;

  ans = ans * 10 + (number % 10);

  number = Math.floor(number / 10);

  reverseNumber(number);

  return ans;
}
console.log(reverseNumber(1234));
