// we are given area, so now we have to return an array of length and width such
// that the difference bw width and height is minimum and also sums up to the area

function constructRectangle(area) {
  let width = Math.floor(Math.sqrt(area));

  while (area % width !== 0) {
    width--;
  }

  return [area / width, width];
}

console.log(constructRectangle(37));
