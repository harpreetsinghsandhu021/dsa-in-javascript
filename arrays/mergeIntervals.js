var merge = function (intervals) {
  let n = intervals.length;

  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let merged = [];

  for (let i = 0; i < n; i++) {
    if (merged.length === 0 || intervals[i][0] > merged[merged.length - 1][1]) {
      merged.push(intervals[i]);
    } else {
      merged[merged.length - 1][1] = Math.max(
        intervals[i][1],
        merged[merged.length - 1][1]
      );
    }
  }

  return merged;
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(intervals));
