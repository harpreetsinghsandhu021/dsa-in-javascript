//Write a function for adding one to number

const AddOne = (digits) => {
  let index = digits.length - 1;

  while (index >= 0 && digits[index] == 9) {
    digits[index] = 0;
    index--;
  }

  if (index < 0) {
    digits.unshift(1);
  } else {
    digits[index]++;
  }

  return digits;
};

let arr = [9, 9, 9];

console.log(AddOne(arr));
