// find no of steps to reduce a number to zero
// two conditions - if number is zero then divide
// it by 2 and if the number is odd then reduce 1 from it

function countSteps(n, steps) {
  if (n === 0) return steps;

  if (n % 2 === 0) {
    return countSteps(Math.floor(n >> 1), ++steps);
  } else {
    return countSteps(n - 1, ++steps);
  }
}
function stepsToReduceToZero(n) {
  return countSteps(n, 0);
}
console.log(stepsToReduceToZero(8));
