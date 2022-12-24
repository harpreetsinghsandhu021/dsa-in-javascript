// find intersection of two arrays and return result
// where element appears once

const findIntersection = (arr1, arr2) => {
  let set = new Set();
  let arr;
  let aux = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        set.add(arr1[i]);
      }
    }
  }

  return [...set];
};

// console.log(findIntersection([1, 2, 2, 1], [2, 2]));

// console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4]));

const findIntersection2 = (nums1, nums2) => {
  const set = new Set([...nums1]),
    res = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      res.add(nums2[i]);
    }
  }
  return [...res];
};

// console.log(findIntersection2([1, 2, 2, 1], [2, 2]));

// console.log(findIntersection2([4, 9, 5], [9, 4, 9, 8, 4]));

// find intersection of two arrays and return result
// where element appears as many times as it occurs

function findIntersection3(arr1, arr2) {
  let obj = new Object();
  let res = [];

  for (let i = 0; i < arr1.length; i++) [(obj[arr1[i]] = arr1[i])];

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      res.push(arr2[i]);
    }
  }
  console.log(res);
}

console.log(findIntersection3([1, 2, 2, 1], [2, 2]));
console.log(findIntersection3([4, 9, 5], [9, 4, 9, 8, 4]));
