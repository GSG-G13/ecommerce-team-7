const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const shop_btn = document.getElementById("shop-btn");
const popup = document.getElementsByClassName("add-popup")[0];
const addBtnProduct = document.getElementsByClassName("add-product")[0];
const closeBtn = document.getElementById("dashboard");
if(burger)
{
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });

}
const productsHolder = document.querySelector(".product-grid");
const categoiesHolder = document.querySelector(".category-bar");




//popup
addBtnProduct.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});



// 
if (shop_btn) {
  shop_btn.addEventListener("click", () => {
    document.getElementById("products").scrollIntoView();
  });
}
const categoiesDisplay = function () {
  let categoiesData = ["TVs", "Smart Phone", "Laptops"];
  categoiesHolder.innerHTML += `<button class="btn active">All</button>`;
  categoiesData.forEach((cat) => {
    categoiesHolder.innerHTML += `<button class="btn active">${cat}</button>`;
    // console.log(cat);
  });
};
categoiesDisplay();

const productDisplay = function () {
  const products = JSON.parse(localStorage.getItem("products"));
  products.forEach((product) => {
    productsHolder.innerHTML += `<div class="product-card">
    <div class="product-img">
      <img src="${product.image}" alt="Product 1" />
    </div>
    <div class="product-info">
      <h3 class="product-name">Product 1</h3>
      <p class="product-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p class="product-price">$9.99</p>
    </div>
    <div class="product-actions">
      <a href="#" class="btn btn-primary">View</a>
      <a href="#" class="btn btn-secondary">Add to cart</a>
    </div>
  </div>`;
  });
};

productDisplay();

categoiesHolder.childNodes.forEach((el) => {
  const products = JSON.parse(localStorage.getItem("products"));
  el.addEventListener("click", () => {
    productsHolder.innerHTML = "";
    if (el.innerHTML == "All") {
      products.forEach((product) => {
        productsHolder.innerHTML += `<div class="product-card">
        <div class="product-img">
          <img src="${product.image}" alt="Product 1" />
        </div>
        <div class="product-info">
          <h3 class="product-name">Product 1</h3>
          <p class="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p class="product-price">$9.99</p>
        </div>
        <div class="product-actions">
          <a href="#" class="btn btn-primary">View</a>
          <a href="#" class="btn btn-secondary">Add to cart</a>
        </div>
      </div>`;
      });
    } else {
      products.forEach((product) => {
        if (product.category == el.innerHTML) {
          productsHolder.innerHTML += `<div class="product-card">
          <div class="product-img">
            <img src="${product.image}" alt="Product 1" />
          </div>
          <div class="product-info">
            <h3 class="product-name">Product 1</h3>
            <p class="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="product-price">$9.99</p>
          </div>
          <div class="product-actions">
            <a href="#" class="btn btn-primary">View</a>
            <a href="#" class="btn btn-secondary">Add to cart</a>
          </div>
        </div>`;
        }
      });
    }
  });
});
