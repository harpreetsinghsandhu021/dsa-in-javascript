function addStrings(num1, num2) {
  num1 = num1.split("");
  num2 = num2.split("");
  let i = num1.length - 1;
  let j = num2.length - 1;

  let carry = 0;
  let res = [];

  while (i >= 0 || j >= 0 || carry != 0) {
    let sum1 = i >= 0 ? num1[i].charCodeAt() - "0".charCodeAt() : 0;
    let sum2 = j >= 0 ? num2[j].charCodeAt() - "0".charCodeAt() : 0;

    let val = sum1 + sum2 + carry;
    res.unshift(val % 10);

    carry = parseInt(val / 10);
    i--;
    j--;
  }
  return res.join("");
}

console.log(addStrings("11", "123"));
