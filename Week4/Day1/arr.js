// reduce
let arr = [2, 4, 5, 9, 6, 12, 14, 17];
console.log(
  arr.reduce((acc, val) => {
    if (val % 2 === 0) acc.push(val);
    return acc;
  }, [])
);
// slice
const str = [1, 2, 14, 47, 15];
console.log(str.slice(0, 2));
// splice
arr = ["a", "b", "c"];
arr.splice(1, 2, "x");
console.log(arr);

// function fName(fullname) {
//   let names = fullname.split(" ");

// }
// fName("John Doe");
// let obj = { fName };
// console.log(obj.fName);
function createPersonObject(fullName) {
  const names = fullName.split(" ");
  const fName = names[0];
  const lName = names[1];
  const personObject = {
    fName: fName,
    lName: lName,
  };

  return personObject;
}

const fullName = "John Doe";
const person = createPersonObject(fullName);
console.log(person);
