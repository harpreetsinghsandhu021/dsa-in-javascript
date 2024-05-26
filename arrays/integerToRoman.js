var intToRoman = function (num) {
  // Define the value-symbol pairs
  const valueSymbols = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  // Iterate over the value-symbol pairs
  for (const [value, symbol] of valueSymbols) {
    // Append the symbol while subtracting the value from num
    while (num >= value) {
      console.log(num);
      result += symbol;
      num -= value;
    }
  }

  return result;
};

// Example usage:
console.log(intToRoman(1994));
