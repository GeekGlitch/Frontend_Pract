// Array
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
// array methods
fruits.pop();
console.log(fruits); // ["banana","apple"]
fruits.shift();
console.log(fruits); // ["apple"]
fruits.unshift("orange");
console.log(fruits); // ["orange","apple"]
fruits.splice(1, 0, "grape");
console.log(fruits); // ["orange","grape","apple"]
fruits.reverse();
console.log(fruits); // ["apple","grape","orange"]
let index = fruits.indexOf("grape");
console.log(index); // 1

// map()
function doubleNumber(num) {
  return num * 2;
}
let numbers = [4, 8, 6];
console.log(numbers.map(doubleNumber)); //[8, 16, 12]
function addNameToArray(name) {
  return name + " is awesome";
}
const names = ["John", "Jane"];
console.log(names.map(addNameToArray)); //['John is awesome','Jane is awesome']
// filter()
function greaterThanTen(number) {
  return number > 10;
}
let num = [5, 7, 9, 12, 15];
console.log(num.filter(greaterThanTen)); //[12, 15]
// reduce()
function sumOfNumbers(accumulator, currentValue) {
  return accumulator + currentValue;
}
let numb = [1, 2, 3, 4, 5];
console.log(numb.reduce(sumOfNumbers)); //15
// sort()
let numbe = [5, 2, 8, 1, 9];
console.log(numbe.sort()); //[1, 2, 5, 8, 9]
