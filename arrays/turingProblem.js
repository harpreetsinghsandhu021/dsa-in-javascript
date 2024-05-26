function calPoint(ops) {
  let arr = [];
  for (let i = 0; i < ops.length; i++) {
    console.log(Number(ops[i]));
    if (Number(ops[i])) {
      arr.push(+ops[i]);
    } else if (ops[i] === "+") {
      let lastEl = arr[arr.length - 1];
      let secondLastEl = arr[arr.length - 2];
      let sum = lastEl + secondLastEl;
      arr.push(+sum);
    } else if (ops[i] === "D") {
      let lastEl = arr[arr.length - 1];
      let double = lastEl * 2;
      arr.push(double);
    } else if (ops[i] === "C") {
      arr.pop();
    }
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(calPoint(["5", "-2", "4", "C", "D", "9", "+", "+"]));
