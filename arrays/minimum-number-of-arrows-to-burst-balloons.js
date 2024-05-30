var findMinArrowShots = function (points) {
  let n = points.length;

  points = points.sort((a, b) => a[0] - b[0]);

  console.log(points);

  let arrow = 1;
  let shootPosition = points[0][1];

  for (let i = 1; i < n; i++) {
    if (points[i][0] > shootPosition) {
      arrow++;
      shootPosition = points[i][1];
    }
  }

  return arrow;
};

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);
