const removeCartItem = (cart, id) => {
  const tempArr = [...cart];
  let idx = tempArr.findIndex((e) => {
    if (e.id == id) return true;
  });
  if (idx == -1) return;
  tempArr.splice(idx, 1);
  return tempArr;
};
// i know its duplicated , DRY principle is not applied here
const deleteProduct = (product, id) => {
  const tempProd = [...product];
  let idx = tempProd.findIndex((e) => {
    if (e.id == id) return true;
  });
  if (idx == -1) return;
  tempProd.splice(idx, 1);
  return tempProd;
};

// let countElement = document.querySelector(".fa-shopping-cart");

function AddProduct(id) {
  let myProducts = JSON.parse(localStorage.getItem("products"));
  let myCartProducts = JSON.parse(localStorage.getItem("cartItems")) || [];

  myProducts.forEach((el) => {
    if (el.id == id) {
      myCartProducts.push({
        id: id,
        title: el.title,
        price: el.price,
        image: el.image,
        description: el.description,
        category: el.category,
      });
    }
  });
  localStorage.setItem("cartItems", JSON.stringify(myCartProducts));
  let myCartProductss = JSON.parse(localStorage.getItem("cartItems")) || [];
  const style = document.createElement("style");
  style.innerHTML = `nav a i::after {content: '${myCartProductss.length}'};`;
  document.head.appendChild(style);
}

let myCartProductss = JSON.parse(localStorage.getItem("cartItems")) || [];
const style = document.createElement("style");
style.innerHTML = `nav a i::after {content: '${myCartProductss.length}'};`;
document.head.appendChild(style);

// AddProduct(8);

function viewProduct(id) {
  const url = `productDetails.html?id=${id}`;
  window.location.href = url;
  // console.log("kmgfm");
}

module.exports = { removeCartItem, deleteProduct };

module.exports = { removeCartItem };
