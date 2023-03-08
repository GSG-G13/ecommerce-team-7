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
const renderCart = () => {
  let data = [
    {
      id: 1,
      title: "Samsung - 88 Class - LED TV",
      price: 499,
      image:
        "https://azcd.joycemayne.com.au/media/catalog/product/cache/23/image/992x558/9df78eab33525d08d6e5fb8d27136e95/q/a/qa85qn85aawxxy-samsung-qn85a-neo-4k-qled-smart-tv-00.jpg",
      description:
        "Enrich your home theater experience with this 88-inch Samsung QLED smart TV. Its Quantum Dots and Infinite Array technologies optimize color details to bring out the richness and depth of 4K movies. This Samsung QLED smart TV comes with a One Connect box and fiber optical cable for clutter-free linking of home cinema and gaming components.",
      category: "TVs",
    },
    {
      id: 2,
      title: " Samsuing 75* Class 6 Series LED TV",
      price: 520,
      image:
        "https://i.gadgets360cdn.com/products/televisions/large/1548155076_832_samsung_65-inch-led-ultra-hd-4k-tv-65nu7100.jpg",
      description:
        "Enrich your home theater experience with this 88-inch Samsung QLED smart TV. Its Quantum Dots and Infinite Array technologies optimize color details to bring out the richness and depth of 4K movies. This Samsung QLED smart TV comes with a One Connect box and fiber optical cable for clutter-free linking of home cinema and gaming components.",
      category: "TVs",
    },
    {
      id: 3,
      title: "Sony 2022 Class 2 Series LED TV",
      price: 540,
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454109_sd.jpg",
      description:
        "Enrich your home theater experience with this 88-inch Samsung QLED smart TV. Its Quantum Dots and Infinite Array technologies optimize color details to bring out the richness and depth of 4K movies. This Samsung QLED smart TV comes with a One Connect box and fiber optical cable for clutter-free linking of home cinema and gaming components.",
      category: "TVs",
    },
  ];
  localStorage.setItem("cartItems", JSON.stringify(data));
};

renderCart();
