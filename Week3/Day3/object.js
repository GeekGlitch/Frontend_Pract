// object
let student = {
  name: "John",
  age: 25,
  city: "New York",
  bio: () => {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  },
};
// console.log(student);
function greetStudent(name) {
  return `Hello ${name}!`;
}
console.log(greetStudent(student.name));
student.college = "S.K.Somaiya";
console.log(student);
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
myObj.cars[1].models.push("i8");
console.log(myObj);
