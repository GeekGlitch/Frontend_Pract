// string
// string method
let name = "John shaun";
console.log(name);
let str1 = "Hello";
let str2 = "World";
let result = `${str1} ${str2}`;
console.log(result);
// string method
let myString = "I am a student";
let indexOfSpace = myString.indexOf(" ");
console.log(`Index of space: ${indexOfSpace}`);
let newStr =
  myString.slice(0, indexOfSpace) + " " + myString.slice(indexOfSpace + 1);
console.log(newStr);
console.log(myString.toLocaleUpperCase());
console.log(myString.toLowerCase());
console.log(myString.includes("st"));
