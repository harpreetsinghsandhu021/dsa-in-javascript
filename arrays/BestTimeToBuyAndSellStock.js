const maxProfit = function (prices) {
 
  let maxSoFar = 0

  let min = prices[0]

  for(let i = 0;i < prices.length;i++){
    min = Math.min(min,prices[i])
    let max = prices[i] - min
    maxSoFar = Math.max(max,maxSoFar)
  }

  return maxSoFar
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
