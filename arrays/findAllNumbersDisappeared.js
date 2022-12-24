function missing_elements(vec) {
  let mis = [];

  for (let i = 0; i < vec.length; i++) {
    let temp = Math.abs(vec[i]) - 1;

    vec[temp] = vec[temp] > 0 ? -vec[temp] : vec[temp];
  }
  for (let i = 0; i < vec.length; i++) {
    console.log(vec[i]);

    if (vec[i] > 0) mis.push(i + 1);
  }

  return mis;
}

let vec = [3, 3, 3, 5, 1];

console.log(missing_elements(vec));
