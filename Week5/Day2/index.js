let productContainer = document.querySelector(".productContainer");
let heading = document.querySelector("h1");
let buttons = document.querySelector(".fetchdata");
let input = document.querySelector("input");
let deletebtn = document.querySelector(".delete");
async function getProduct() {
  try {
    // heading.innerText = "LOADING .......";
    buttons.innerText = "Loading....";
    buttons.disabled = true;
    // buttons.innerText = "Loading";
    let api = `https://dummyjson.com/products`;
    let res = await fetch(api);
    let data = await res.json();
    renderProduct(data.products);
    // heading.innerText = "";
    // buttons.innerText = "fetch-data";
    buttons.innerText = "Fetch_data";
    buttons.disabled = false;
  } catch (error) {
    console.log(error.message);
  }
}
function renderProduct(product) {
  product.forEach((product) => {
    let productCard = `<div class="card">
         <div class="imgBox">
           <img
             src=${product.thumbnail}
             alt=" shoes Img"
           />
           <div class="viewMore">View More</div>
           <div class="best">Best Seller</div>
         </div>
         <div class="container">
           <h2>${product.title}</h2>
           <p>
             ${product.description}
           </p>
           <p>Price: ${product.price}</p>
           <button>Add to Cart</button>
         </div>
       </div>`;
    productContainer.innerHTML += productCard;
  });
}
// getProduct();

buttons.addEventListener("click", () => {
  setTimeout(() => {
    getProduct();
  }, 2000);
});
