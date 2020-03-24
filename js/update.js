// Get inputs elements
let ProductName = document.getElementById("ProductNameInp");
let ProductPrice = document.getElementById("ProductPriceInp");
let ProductCategory = document.getElementById("ProductCategoryInp");
let ProductDesc = document.getElementById("ProductDescInp");




// Variable to store the products array
let productContainer;

// Check the local storage for the products array
if (localStorage.getItem("productsData") == null) {
  console.log('storge is empty'); // Error msg
 
}
else {

  // Assign productContainer array to products array from  storage
  productContainer = JSON.parse(localStorage.getItem("productsData"));

  console.log(productContainer); // For Test

  // Get product object index from local storage
  let productIndex = JSON.parse(localStorage.getItem("productIndex"));

  console.log(productIndex); // For Test

  // Variable to store spacific object from the product array by its index
  let productToUpdate = productContainer[productIndex];

  console.log(productToUpdate); // For Test

  // Fill inputs values from product object
  ProductName.value = productToUpdate.name;
  ProductPrice.value = productToUpdate.price;
  ProductCategory.value = productToUpdate.category;
  ProductDesc.value = productToUpdate.description;


  console.log(productContainer); // For Test

  // Save after update Function
  function saveProduct() {
  productToUpdate.name = ProductName.value;
  productToUpdate.price = ProductPrice.value;
  productToUpdate.category = ProductCategory.value;
  productToUpdate.description = ProductDesc.value;

  console.log(productContainer); // For Test

  // Set products array in local storage
  localStorage.setItem("productsData", JSON.stringify(productContainer));

  // Navigate back to index 
  window.location.href = './index.html'


  }


}// End of Else statment


