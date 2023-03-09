// Select the confirm button and attach a click event listener
document.getElementById("confirm").addEventListener("click", function() {

    // Retrieve the input values and create a product object
    const name = document.getElementById("name").value;
    const details = document.getElementById("details").value;
    const price = document.getElementById("price").value;
    const imgLink = document.getElementById("img-link").value;
    const category = document.getElementById("category").value;
  
    const product = {
      name: name,
      details: details,
      price: price,
      imgLink: imgLink,
      category: category
    };
  
    // Retrieve the existing products from local storage or create an empty array
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
  
    // Add the new product to the existing products array
    existingProducts.push(product);
  
    // Store the updated products array in local storage
    localStorage.setItem("products", JSON.stringify(existingProducts));
  
    // Display a success message
    alert("Product added successfully!");
  
  });
  