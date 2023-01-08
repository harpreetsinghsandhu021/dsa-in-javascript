function printStars(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

// console.log(printStars(4));
// print stars using recursion
// let str = "";
// function printStarsUsingRecursion(rows, cols) {
//   if (rows === 0) return;

//   if (cols < rows) {
//     str += "* ";
//     printStarsUsingRecursion(rows, cols + 1);
//   } else {
//     str += "\n";
//     printStarsUsingRecursion(rows - 1, 0);
//   }
//   return str;
// }
// console.log(printStarsUsingRecursion(4, 0));
let str2 = "";
function printStarsUsingRecursion2(rows, cols) {
  if (rows === 0) return;

  if (cols < rows) {
    printStarsUsingRecursion2(rows, cols + 1);
    str2 += "* ";
  } else {
    printStarsUsingRecursion2(rows - 1, 0);
    str2 += "\n";
  }
  return str2;
}
console.log(printStarsUsingRecursion2(4, 0));
