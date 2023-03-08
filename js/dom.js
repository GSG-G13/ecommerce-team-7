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
