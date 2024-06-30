// given a string, print all its permutations

function permutations(str) {
  let res = [];
  return permutationHelper(str, "", res);
}
function permutationHelper(str, ans, res) {
  if (str.length === 0) {
    res.push(ans);
    return;
  }

  let char = str[0];

  for (let i = 0; i <= ans.length; i++) {
    let first = ans.substring(0, i);
    let second = ans.substring(i, ans.length);
    permutationHelper(str.substring(1), first + char + second, res);
  }
  return res;
}

var permutationNumbers = function (nums) {
  let results = [];
  permutationNumberHelper(nums, [], results);
  return results;
};

function permutationNumberHelper(arr, path, res) {
  if (arr.length === 0) {
    res.push(path);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i);
    let right = arr.slice(i + 1);

    let remaining = left.concat(right);

    permutationNumberHelper(remaining, path.concat(arr[i]), res);
  }
}

function permutationHelperCount(str, ans) {
  if (str.length === 0) {
    return 1;
  }

  let char = str[0];

  let count = 0;

  for (let i = 0; i <= ans.length; i++) {
    let first = ans.substring(0, i);
    let second = ans.substring(i, ans.length);
    count += permutationHelper(str.substring(1), first + char + second);
  }
  return count;
}

// console.log(permutations("123"));
console.log(permutationNumbers([1, 2, 3]));
