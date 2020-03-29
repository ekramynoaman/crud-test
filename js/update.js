// Get inputs elements
let ProductNam = document.getElementById("ProductNameInpp");
let ProductPric = document.getElementById("ProductPriceInpp");
let ProductCategor = document.getElementById("ProductCategoryInpp");
let ProductDes = document.getElementById("ProductDescInpp");




// Variable to store the products array
let productsContainer;
console.log(productsContainer);


// // Check the local storage for the products array
if (localStorage.getItem("productsData") == null) {
  console.log('storge is empty'); // Error msg
 
}
else {

  // Assign productsContainer array to products array from  storage
  let x = localStorage.getItem("productsData")
  console.log(x);
  
  productsContainer = JSON.parse(x);
  console.table(productsContainer);
  



  // Get product object index from local storage
  let productIndex = JSON.parse(localStorage.getItem("productIndex"));

  console.log(productIndex); // For Test

  // Variable to store spacific object from the product array by its index
  let productToUpdate = productsContainer[productIndex];

  console.log(productToUpdate); // For Test

  // Fill inputs values from product object
  ProductNam.value = productToUpdate.name;
  ProductPric.value = productToUpdate.price;
  ProductCategor.value = productToUpdate.category;
  ProductDes.value = productToUpdate.description;



  // Save after update Function
  function saveProduct() {
  productToUpdate.name = ProductNam.value;
  productToUpdate.price = ProductPric.value;
  productToUpdate.category = ProductCategor.value;
  productToUpdate.description = ProductDes.value;

  console.table(productsContainer); // For Test

  // Set products array in local storage
  localStorage.setItem("productsData", JSON.stringify(productsContainer));

  // Navigate back to index 
  // window.location.href = './index.html'
  let updateDiv = document.getElementById('update-div');
  updateDiv.style.display = 'none';


   }

   function back() {
    let updateDiv = document.getElementById('update-div');
    updateDiv.style.display = 'none';
   }


 }// End of Else statment


