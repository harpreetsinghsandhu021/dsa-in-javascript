var convert = function (s, numRows) {
  let rows = Array.from({ length: Math.min(s.length, numRows) }).fill("");
  let currRow = 0;
  let goingDown = false;

  for (let c of s) {
    rows[currRow] += c;
    if (currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;
    currRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};

(s = "PAYPALISHIRING"), (numRows = 3);
console.log(convert(s, numRows));
