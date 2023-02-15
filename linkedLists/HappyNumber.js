function findSquare(num) {
  let ans = 0;
  //   console.log(num);

  while (num > 0) {
    let rem = num % 10;
    ans += rem * rem;
    num = Math.floor(num / 10);
  }
  //   console.log(ans);

  return ans;
}

const isHappy = function (n) {
  let fast = n;
  let slow = n;

  do {
    slow = findSquare(slow);
    fast = findSquare(findSquare(fast));
  } while (slow !== fast);

  if (slow === 1) {
    return true;
  }
  return false;
};

console.log(isHappy(19));
