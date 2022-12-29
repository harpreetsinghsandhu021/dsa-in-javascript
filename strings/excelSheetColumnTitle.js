function excelSheetColumnFromTitle(str) {
  let res = 0;

  for (let i = 0; i < str.length; i++) {
    res *= 26;

    res += str[i].charCodeAt() - "A".charCodeAt() + 1;
  }
  console.log(res);
}

// excelSheetColumnTitle("AB");

function excelSheetTitleFromColumn(str) {}

excelSheetTitleFromColumn("1");
