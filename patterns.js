let rows = 6;
let str = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 0; j < i; j++) {
    str += "* ";
  }
  str += "\n";
}

let str2 = "";

for (let i = 1; i <= rows; i++) {
  for (let j = rows; j > i; j--) {
    str2 += "* ";
  }
  str2 += "\n";
}

let str3 = "";

for (let i = 1; i < 2 * rows; i++) {
  const cols = i > rows ? 2 * rows - i : i;

  for (let j = 0; j < cols; j++) {
    str3 += "* ";
  }
  str3 += "\n";
}

let str4 = "";
for (let i = 1; i < 2 * rows; i++) {
  const cols = i > rows ? 2 * rows - i : i;

  for (let s = 0; s < rows - cols; s++) {
    str4 += " ";
  }

  for (let j = 0; j < cols; j++) {
    str4 += "* ";
  }
  str4 += "\n";
}

let str5 = "";

for (let i = 1; i <= rows; i++) {
  for (let s = 0; s <= rows - i; s++) {
    str5 += " ";
  }

  for (let j = 0; j < i; j++) {
    str5 += "* ";
  }
  str5 += "\n";
}

let str6 = "";

for (let i = 1; i <= rows; i++) {
  for (let s = rows; s > rows - i; s--) {
    str6 += " ";
  }

  for (let j = rows; j >= i; j--) {
    str6 += "* ";
  }

  str6 += "\n";
}

let str7 = "";

for (let i = 0; i <= 2 * rows; i++) {
  if (i < rows) {
    for (let s = rows; s > rows - i; s--) {
      str7 += " ";
    }
    for (let j = rows; j > i; j--) {
      str7 += "* ";
    }
    str7 += "\n";
  }

  if (i > rows) {
    for (let space = rows; space > i - rows; space--) {
      str7 += " ";
    }
    for (let k = 0; k < i - rows; k++) {
      str7 += "* ";
    }
    str7 += "\n";
  }
}

console.log(str);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
console.log(str7);

// let str8 = "";
// for (let i = 1; i < rows + 1; i++) {
//   for (j = 0; j < i; j++) {
//     if (i === 1) {
//       str8 += "* ";
//     }
//     if()
//   }
//   str8 += " \n";
// }
// console.log(str8);
