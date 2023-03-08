let btnPlus = document.querySelectorAll(".btn_plus");
let btnMinus = document.querySelectorAll(".btn_minus");
let count = document.querySelectorAll(".count");
let Price = document.querySelectorAll(".price");
const cancel = document.querySelectorAll(".cancel");
const listProduct = document.querySelectorAll(".list-product");


// loop on btn plus
btnPlus.forEach((ele, index) => {
  let priceNumber = parseInt(Price[index].textContent);
  let counter = parseInt(count[index].textContent);

  ele.addEventListener("click", (e) => {
    counter++;
    count[index].textContent = counter;
    let total = counter * priceNumber;
    // add total price to subtotal
    Price[index].textContent = total;
    // let arr = JSON.stringify(total);
    // localStorage.setItem("totalPrice", total);
  });


  // loop on btn minus
  btnMinus[index].addEventListener("click", (e) => {
    if (counter > 0) {
      counter--;
      count[index].textContent = counter;
      let total = counter * priceNumber;
    //   // add total price to subtotal
      Price[index].textContent = total;
    //   //   localStorage.setItem("totalPrice", total);
    }
  });
});

// loop on the element cancel and remove ul

cancel.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    listProduct[index].remove();

    // localStorage.setItem("display", listProduct[index].style.display);

    // if (localStorage.getItem("display")) {
    //   console.log(localStorage.getItem("display"));
    //   listProduct[index].style.display = localStorage.getItem("display");
    // }
  });
});