const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const shop_btn = document.getElementById("shop-btn");
const popup = document.getElementsByClassName("add-popup")[0];
const addBtnProduct = document.getElementsByClassName("add-product")[0];
const closeBtn = document.getElementById("dashboard");
const searchInput = document.querySelector(".search-bar input");

if (burger) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}
const productsHolder = document.getElementById("productsHolder");
const categoiesHolder = document.querySelector(".category-bar");

//popup
if (addBtnProduct || closeBtn) {
  addBtnProduct.addEventListener("click", () => {
    popup.style.display = "flex";
  });
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

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
      <h3 class="product-name">${product.title}</h3>
      <p class="product-description">
        ${product.description}
      </p>
      <p class="product-price">$${product.price}</p>
    </div>
    <div class="product-actions">
      <a onclick="viewProduct(${product.id})" class="btn btn-primary">View</a>
      <a onclick="AddProduct(${product.id})" class="btn btn-secondary">Add to cart</a>
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
          <h3 class="product-name">${product.title}</h3>
          <p class="product-description">
            ${product.description}
          </p>
          <p class="product-price">$${product.price}</p>
        </div>
        <div class="product-actions">
          <a onclick="viewProduct(${product.id})" class="btn btn-primary">View</a>
          <a onclick="AddProduct(${product.id})" class="btn btn-secondary">Add to cart</a>
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
            <h3 class="product-name">${product.title}</h3>
            <p class="product-description">
              ${product.description}
            </p>
            <p class="product-price">$${product.price}</p>
          </div>
          <div class="product-actions">
            <a onclick="viewProduct(${product.id})" class="btn btn-primary">View</a>
            <a onclick="AddProduct(${product.id})" class="btn btn-secondary">Add to cart</a>
          </div>
        </div>`;
        }
      });
    }
  });
});

// Search products
searchInput.addEventListener("input", () => {
  let value = searchInput.value;
  const products = JSON.parse(localStorage.getItem("products"));
  productsHolder.innerHTML = "";
  products.forEach((product) => {
    if (product.title.includes(value)) {
      productsHolder.innerHTML += `<div class="product-card">
        <div class="product-img">
          <img src="${product.image}" alt="Product 1" />
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.title}</h3>
          <p class="product-description">
            ${product.description}
          </p>
          <p class="product-price">$${product.price}</p>
        </div>
        <div class="product-actions">
          <a onclick="viewProduct(${product.id})" class="btn btn-primary">View</a>
          <a onclick="AddProduct(${product.id})" class="btn btn-secondary">Add to cart</a>
        </div>
      </div>`;
    }
  });
});

function toggleProductsList() {
  document.querySelector(".list_btn").addEventListener("click", () => {
    productsHolder.classList.remove("product-grid");
    document.querySelectorAll(".product-img").forEach((el) => {
      el.classList.add("product-list");
    });
    document.querySelectorAll("#productsHolder > div").forEach((el) => {
      el.classList.add("products-margin");
    });
  });

  document.querySelector(".grid_btn").addEventListener("click", () => {
    document.querySelectorAll(".product-img").forEach((el) => {
      el.classList.remove("product-list");
    });
    productsHolder.classList.add("product-grid");
    document.querySelectorAll("#productsHolder > div").forEach((el) => {
      el.classList.remove("products-margin");
    });
  });
}
toggleProductsList();
