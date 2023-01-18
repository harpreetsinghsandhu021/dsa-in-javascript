// Check If N and Its Double Exist
// Given an array arr of integers,
// check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

const checkIfExist = (arr) => {
  const hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    const currValue = arr[i];

    if (hashTable[currValue] !== undefined) {
      return true;
    }
    console.log(hashTable);

    hashTable[currValue / 2] = 0;
    hashTable[currValue * 2] = 0;
    console.log(hashTable);
  }

  return false;
};

// console.log(checkIfExist([10, 2, 5, 3]));
// console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([7, 1, 14, 11]));
