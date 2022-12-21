// this print pascals triangle in O(n * n)
// so we will discuss a better approach in pascalsTriangle2.js

function printPascal(n) {
 
  let str = ''
  for (let line = 0; line < n; line++) {
    for (let i = 0; i <= line; i++) str += `${binomialCoeff(line, i)}  `
      
    str += '\n'
    
  }
  return str
}

function binomialCoeff(n, k) {
  let res = 1;

  if (k > n - k) k = n - k;

  for (let i = 0; i < k; ++i) {
    res *= n - i;
    res /= i + 1;
  }
  return res;
}


let n = 5;
console.log(printPascal(n));
