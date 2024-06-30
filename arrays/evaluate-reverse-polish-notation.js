var evalRPN = function (tokens) {
  let stack = [];

  for (let token of tokens) {
    if (token === "+" || token === "/" || token === "*" || token === "-") {
      let a = stack.pop();
      let b = stack.pop();

      if (token === "+") {
        stack.push(a + b);
      } else if (token === "-") {
        stack.push(b - a);
      } else if (token === "*") {
        stack.push(a * b);
      } else if (token === "/") {
        stack.push(Math.trunc(b / a));
      }
    } else {
      stack.push(+token);
    }
  }

  return stack.pop();
};

console.log(evalRPN(["4", "13", "5", "/", "+"]));
