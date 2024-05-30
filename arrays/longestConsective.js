var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let longestStreak = 0;

  for (let num of set) {
    // now we check if the number is part of the sequence
    if (!set.has(num - 1)) {
      let currNum = num;
      let currStreak = 1;

      // now we count the length of the sequence

      while (set.has(currNum + 1)) {
        currNum += 1;
        currStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currStreak);
    }
  }

  return longestStreak;
};

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
