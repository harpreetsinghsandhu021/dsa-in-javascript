const readLine = require("readline");

const ques = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

ques.question("tell us your name : ", (name) => {
  console.log(`your name is ${name}`);
  ques.close();
});
