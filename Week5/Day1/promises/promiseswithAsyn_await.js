import products from "../../../Week4/Day4/Json/product.json" assert { type: "json" };

let err = false;
let body = document.querySelector("body");
function promise1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!err) {
        res(products);
        body.innerText = "";
        console.log("data fetched ..");
      } else {
        rej(new Error("some went Wrong ply Try again...."));
      }
    }, 2000);
  });
}
function promise2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!err) {
        res(products);
        body.innerText = "";
        console.log("data fetched ..");
      } else {
        rej(new Error("some went Wrong ply Try again...."));
      }
    }, 2000);
  });
}
function promise3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!err) {
        res(products);
        body.innerText = "";
        console.log("data fetched ..");
      } else {
        rej(new Error("some went Wrong ply Try again...."));
      }
    }, 2000);
  });
}
console.log("outside function");
async function callpromises() {
  try {
    console.log("inside callpromises function");
    let allpromise = Promise.all([promise1, promise2, promise3]);
    console.log("after we get resolve promises data");
    return " my data";
  } catch (error) {
    console.log("Error", err.message);
  }
}
callpromises();
console.log("after function has been called");
