let inputs = document.getElementsByTagName('input');
console.log(inputs);

let ProductDesc = document.getElementById('ProductDescInp');



let productContainer;
if (localStorage.getItem("productsData") == null) {
  productContainer = [];


}
else {
  productContainer = JSON.parse(localStorage.getItem("productsData"));
  displayProduct();
}


function addproduct() {
  let ProductName = document.getElementById("ProductNameInp").value;
  let ProductPrice = document.getElementById("ProductPriceInp").value;
  let ProductCategory = document.getElementById("ProductCategoryInp").value;
  let ProductDesc = document.getElementById("ProductDescInp").value;

  let product = {
    name: ProductName,
    price: ProductPrice,
    category: ProductCategory,
    description: ProductDesc
  };
  productContainer.push(product);
  localStorage.setItem("productsData", JSON.stringify(productContainer))
  displayProduct();
  clearInputs(); // for clear the inputs function declare blow Added by Ekramy
}



function displayProduct() {
  let temp = ``;
  for (let i = 0; i < productContainer.length; i++) {
    temp += `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="products mb-4 mt-4">
        <img src="https://placehold.it/300x250/000099/ffffff?text=Product" class="img-fluid" />
        <h4 class="py-2">` + productContainer[i].name + `
          <span class="ml-3 badge badge-info">` + productContainer[i].category + `</span>
        </h4>
        <span class="products-price">` + productContainer[i].price + `</span>
        <p class="products-desc">` + productContainer[i].description + `</p>
        <button onclick="deleteProduct(`+ i + `)" type="button" class="btn btn-outline-danger btn-sm">Delete</button>
          <a  onclick="updateProduct(`+ i +`)" type="button" class="updatebtn btn btn-outline-info btn-sm">Update</a>
      </div>
    </div>`;
  }

  document.getElementById("productRow").innerHTML = temp;

}

function searchProduct(term) {
  let temp = ``;

  for (let i = 0; i < productContainer.length; i++) {

    if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) || productContainer[i].category.toLowerCase().includes(term.toLowerCase()) || productContainer[i].price.includes(term)) {

      temp += `
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="products">
          <img src="https://placehold.it/300x250/000099/ffffff?text=Product" class="img-fluid" />
          <h4 class="py-2">` + productContainer[i].name + `
            <span class="ml-3 badge badge-info">` + productContainer[i].category + `</span>
          </h4>
          <p class="products-desc">` + productContainer[i].description + `</p>
          <span class="products-price">` + productContainer[i].price + `</span>
        </div>
      </div>`;
    }

  }

  document.getElementById("productRow").innerHTML = temp;
}

function deleteProduct(indx) {
  let deleted = productContainer.splice(indx, 1);
  localStorage.setItem("productsData", JSON.stringify(productContainer))
  displayProduct();
}

//  update sction //

// Globle variables to use in update function and save function
var productIndex; // For index of product object
var productToUpdate; // For store the product object

// Inputs of hidden form
let ProductNam = document.getElementById("ProductNameInpp");
let ProductPric = document.getElementById("ProductPriceInpp");
let ProductCategor = document.getElementById("ProductCategoryInpp");
let ProductDes = document.getElementById("ProductDescInpp");

// Hidden  update Div
let updateDiv = document.getElementById('update-div');


// Update Function
function updateProduct(indx) {

  // store the index of object in storage
  productIndex = indx;

  // Show the form
  updateDiv.style.display = 'block';

  console.log(productIndex); //For Test

  // store spacific object from the product array by its index
   productToUpdate = productContainer[productIndex];

  console.log(productToUpdate); // For Test

  // Fill inputs values from product object
  ProductNam.value = productToUpdate.name;
  ProductPric.value = productToUpdate.price;
  ProductCategor.value = productToUpdate.category;
  ProductDes.value = productToUpdate.description;

}

console.log(productToUpdate); //For Test

// Save after update Function
function saveProduct() {
  // Assign product object values by inputs value
  productToUpdate.name = ProductNam.value;
  productToUpdate.price = ProductPric.value;
  productToUpdate.category = ProductCategor.value;
  productToUpdate.description = ProductDes.value;

  console.table(productContainer); // For Test

  // Set products array in local storage
  localStorage.setItem("productsData", JSON.stringify(productContainer));
  // hide the form
  updateDiv.style.display = 'none';

  window.location.reload();

}


// Cancle function
function back() {
  updateDiv.style.display = 'none';
}


// Clear all inputs and textarea after add product Add by Ekramy
function clearInputs () {
  ProductDesc.value = "";
  for (let i = 0; i < inputs.length; i++ ){
    inputs[i].value = "";
  }

}
 

