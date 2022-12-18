function minimumDistance(arr, x, y) {
  let minimumDistance = 0;
  let point1 = 0;
  let point2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      point1 = i;
    } else if (arr[i] === y) {
      point2 = i;
    }
  }

  minimumDistance = Math.abs(point1 - point2);

  return minimumDistance;
}
minimumDistance([3, 6, 9, 10, 44, 66, 0], 9, 66);
