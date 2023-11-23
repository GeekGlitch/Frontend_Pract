import productjson from "./product.json" assert { type: "json" };
let productContainer = document.querySelector(".productContainer");
console.log(productjson);

productjson.forEach((product) => {
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
