function subsets(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]); // Add the current path to the result

    // Explore all possible choices from the current start index
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); // Make a choice: include nums[i] in the current subset
      backtrack(i + 1, path); // Explore further with the updated path
      path.pop(); // Backtrack: undo the choice for the next iteration
      console.log(path);
    }
  }

  // Start exploration from index 0 with an empty path
  backtrack(0, []);

  return result;
}

// Example usage:
const nums = [1, 2, 3];
console.log(subsets(nums)); // Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
