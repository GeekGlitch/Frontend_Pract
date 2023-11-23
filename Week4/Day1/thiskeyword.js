// console.log("This is this : ", this);

function test() {
  // console.log(this);
}
// this.test()
test();

var testing = { test: "This is testing object" };

var arrowTesting = () => {
  console.log("This is arrow testing func");
};

var name = "pratham";

// local context
let bio = {
  name: "pratham",
  age: 23,
  meArrow: () => {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  },
  meNormal: function () {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  },
};
bio.meArrow();
