function printHelloWorld(l) {
  if (l === 0) return;

  console.log("hello world!");

  return printHelloWorld(l - 1);
}
// printHelloWorld(5);

function printNumbers(l, n) {
  console.log(l);
  if (l === n) return;

  return printNumbers(l + 1, n);
}

// printNumbers(1, 10);

function printNumbers2(n) {
  if (n === 0) return;
  console.log(n);

  printNumbers2(n - 1);
  console.log(n);
}

printNumbers2(5);
