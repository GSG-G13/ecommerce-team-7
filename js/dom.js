const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const shop_btn = document.getElementById("shop-btn");

if (shop_btn) {
  shop_btn.addEventListener("click", () => {
    document.getElementById("products").scrollIntoView();
  });
}

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});
