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
          <a  onclick="updateProduct(`+ i +`)" type="button" class="btn btn-outline-info btn-sm">Update</a>
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

function updateProduct(indx) {
    let productId = indx;
    localStorage.setItem("productIndex", JSON.stringify(productId));
    // e.target.setAttribute('href', './update_product');

    window.location.href = './update_product.html?'+productId;


}
