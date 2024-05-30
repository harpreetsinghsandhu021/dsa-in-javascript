var isValid = function (s) {
  let stack = [];

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    if (stack.length === 0) return false;

    let check;

    if (char === ")") {
      check = stack.pop();
      if (check === "{" || check === "[") return false;
    } else if (char === "}") {
      check = stack.pop();
      if (check === "[" || check === "(") return false;
    } else {
      check = stack.pop();
      if (check === "{" || check === "(") return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
