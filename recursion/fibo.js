function nthFiboNumber(n) {
  if (n < 2) {
    return n;
  }

  return nthFiboNumber(n - 1) + nthFiboNumber(n - 2);
}

console.log(nthFiboNumber(6));
