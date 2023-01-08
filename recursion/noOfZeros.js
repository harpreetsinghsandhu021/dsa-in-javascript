function noOfZeros(n, count) {
  if (n === 0) return count;
  let rem = n % 10;

  if (rem !== 0) {
    return noOfZeros(Math.floor(n / 10), count);
  } else {
    return noOfZeros(Math.floor(n / 10), ++count);
  }
}
console.log(noOfZeros(302060904, 0));
