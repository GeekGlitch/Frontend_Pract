import products from "../MenShoes/data002.json" assert { type: "json" };

let productContainer = document.querySelector(".feactureProduct");
console.log(products);

Object.values(products).forEach((product) => {
  if (product.gender === "KIDS") {
    let featureProduct = `<div class="featured-product">
    <div class="imgBox">
      <img
        class="product-image"
        src=${product.imageURL}
        alt=${product.name}
      />
      <div class="viewMore">View More</div>
      <div class="best">Best Seller</div>
    </div>

    <div class="product-details">
      <h2 class="product-title">${product.name}</h2>
      <p class="product-brand">Brand: ${product.brand}</p>
      <p class="product-gender">Gender: ${product.gender}</p>
      <p class="product-price">$${product.price}</p>
      <p class="product-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <a href="#" class="buy-now-button">Buy Now</a>
    </div>
  </div>`;
    productContainer.innerHTML += featureProduct;
  }
});
