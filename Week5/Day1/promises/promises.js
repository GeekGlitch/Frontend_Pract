import products from "../../../Week4/Day4/Json/product.json" assert { type: "json" };
// const myFirstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success!"); // Yay! Everything went well!
//   }, 250);
// });

// myFirstPromise.then((successMessage) => {
//   console.log(`Yay! ${successMessage}`);
// });

let body = document.querySelector("body");
function prom() {
  return new Promise((res, rej) => {
    console.log("Fetching data, please wait.");
    setTimeout(() => {
      $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
        res(data);
      }).fail((err) => {
        rej("Fail to load JSON");
      });
    }, 2000);
  });
}
function prinProduct(product) {
  product.forEach((product) => {
    body.innerHTML += ` <div class="card">${product.title}
        </div>`;
  });
}

document.querySelector("button").addEventListener("click", () => {
  prom().then((products) => prinProduct(products));
});

function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        const data = { name: "manoj", age: 23, city: "Example city" };
        res(data);
      } else {
        rej("Error fetching data from the API"); // If unsuccessful, reject with an error message
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data has been fetched successfully", data);
  })
  .catch((err) => {
    console.log("Error", err);
  });
