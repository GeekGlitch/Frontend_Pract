// condition
// if and else
// if (condition) {
//   statement1;
// } else {
//   statement2;
// }
const time = new Date().getHours();
let greeting;
if (time < 6 || time > 20) {
  greeting = "Good night";
} else if (time >= 6 && time <= 18) {
  greeting = "Hello";
} else {
  greeting = "Good afternoon";
}
console.log(greeting);

// switch case
// switch (expression) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
//   default:
//     statement3;
//     break;
// }
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
// for loop
// for (initialization; test; update) {
//   statement;
// }
for (let i = 0; i < 5; i++) {
  console.log("i is equal to", i);
}

// while loop
// while (test) {
//   statement;
// }
let i = 0;
while (i < 5) {
  console.log("i is equal to ", i);
  i++;
}
// do-while loop

// do {
//   statement;
// } while (test);

let j = 0;
do {
  console.log("j is equal to", j);
  j++;
} while (j < 5);

let arr = [10, 12, 14, 15, 165];

arr.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element + " is even");
  } else {
    console.log(element + " is odd");
  }
});
for (const key in arr) {
  console.log(key);
}
for (const iterator of arr) {
  console.log(iterator);
}
