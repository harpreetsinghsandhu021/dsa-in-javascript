// reArrange([6, 4, 2, 1, 8, 3])
function compare(X, Y) {
  let XY = X + Y;
  let YX = Y + X;

  return YX - XY;
}
// reArranging array to get largest number formation
function reArrangeForLargestNumeber(arr) {
  arr.sort(function (a, b) {
    let ab = String(a) + String(b);
    let ba = String(b) + String(a);

    return ba - ab;
  });

  return arr.join("");
}
