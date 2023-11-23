// variable

// var name = "John Doe";
var age = 30;
console.log("My name is " + name);
// let keyword
let firstName = "John";
let lastName = "Doe";
let fullname = firstName + " " + lastName;
console.log(fullname);
// const keyword
const PI = 3.14;
console.log("The value of PI is: ", PI);
// data types in JavaScript
let num = 25;
num = "twenty five";
console.log(`${num} is a number`);
let bool = true;
bool = false;
console.log(`${bool}`);
let nullVar = null;
nullVar = undefined;
undefinedVar = nullVar;
console.log(`${undefinedVar}`);
let arr = [1, 2, 3];
arr[0] = "one";
arr[1] = "two";
arr[2] = "three";
console.log(arr);
let obj = {
  name: "John",
  age: 30,
};
obj["city"] = "New York";
console.log(obj);
// scope
if (true) {
  let x = 10;
  console.log(x);
} else {
  let y = 20;
  console.log(y);
}

// block scoping
{
  let z = 30;
  console.log(z);
}
