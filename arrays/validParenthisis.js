//Write a Function to check if brackets are balanced
function areBracketsBalanced(str) {
  let stack = [];

  // Traversing the stression
  for (let i = 0; i < str.length; i++) {
    let x = str[i];

    if (x == "(" || x == "[" || x == "{") {
      // Push the element in the stack
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty at this point.
    if (stack.length == 0) return false;

    let check;

    if (x === ")") {
      check = stack.pop();
      if (check == "{" || check == "[") return false;
      break;
    } else if (x === "}") {
      check = stack.pop();
      if (check == "[" || check == "(") return false;
    } else if (x == "]") {
      check = stack.pop();
      if (check == "{" || check == "(") return false;
    }

    // switch (x) {
    //   case ")":
    //     check = stack.pop();
    //     if (check == "{" || check == "[") return false;
    //     break;

    //   case "}":
    //     check = stack.pop();
    //     if (check == "(" || check == "[") return false;
    //     break;

    //   case "]":
    //     check = stack.pop();
    //     if (check == "(" || check == "{") return false;
    //     break;
    // }
  }

  // Check Empty Stack
  return stack.length == 0;
}

// Driver code
let str = "[]()";

// Function call
if (areBracketsBalanced(str)) {
  console.log("balanced");
} else {
  console.log("not balanced");
}

// This code is contributed by rag2127
