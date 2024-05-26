const maxProfit = function (prices) {
  let maxSoFar = 0;

  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    let max = prices[i] - min;
    maxSoFar = Math.max(maxSoFar, max);
  }

  return maxSoFar;
};

// the array here stores the prices of a stock at each different day
// we need to find the max profit we can get out of it, remember we cannot
// sell a stock before buying.
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
