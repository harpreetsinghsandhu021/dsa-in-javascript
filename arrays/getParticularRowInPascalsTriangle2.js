function generateNthrow(N) {
  let arr = [];
  let prev = 1;
  arr.push(prev);

  for (let i = 1; i <= N; i++) {
    let curr = (prev * (N - i + 1)) / i;

    arr.push(curr);
    prev = curr;
  }

  console.log(arr);
}

generateNthrow(4);
