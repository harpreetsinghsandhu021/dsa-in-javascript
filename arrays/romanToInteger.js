function romanToInt(s) {
  let translations = new Map();

  translations.set("I", 1);
  translations.set("V", 5);
  translations.set("X", 10);
  translations.set("L", 50);
  translations.set("C", 100);
  translations.set("D", 500);
  translations.set("M", 1000);

  let number = 0;

  s = s.replace("IV", "IIII").replace("IX", "VIIII");
  s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
  s = s.replace("CD", "CCCC").replace("CM", "DCCCC");
  for (let char of s) number += translations.get(char);
  console.log(number);
}

romanToInt("MCMIV");
