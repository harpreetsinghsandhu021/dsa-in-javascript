function checkperfectsquare(n) {
  // If ceil and floor are equal
  // the number is a perfect
  // square

  if (Math.ceil(Math.sqrt(n)) == Math.floor(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }
}
console.log(~~(4 / 6));

console.log(checkperfectsquare(16));
