// Types of function
// normal function
function add(x, y) {
  return x + y;
}
console.log("add: " + add(2, 3));
// arrow function
const multiply = (a, b) => a * b;
console.log("multiply: " + multiply(4, 5));
// anonymous function
var square = function (n) {
  return n * n;
};
console.log("square: " + square(6));

// callback function

// higher order function

// function executeAfterTwoSeconds() {
//   console.log("This message is displayed after two seconds");
// }
// setTimeout(executeAfterTwoSeconds, 2000);

function table(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
}

table(7);

function cal(a, b, operandType) {
  if (operandType === "+") {
    return a + b;
  } else if (operandType === "-") {
    return a - b;
  } else if (operandType === "/") {
    return a / b;
  } else if (operandType === "*") {
    return a * b;
  }
  // let result;
  // switch (operandType) {
  //   case "+":
  //     result = a + b;
  //     break;
  //   case "-":
  //     result = a - b;
  //     break;
  //   case "/":
  //     result = a / b;
  //     break;
  //   case "*":
  //     result = a * b;
  //     break;
  // }
  // return result;
}
console.log(cal(8, 2, "+"));
cal(10, 8, "-");
