const inform = console.log
const chalk = require('chalk');
const nanoid= require('nanoid');
const faker = require('@faker-js/faker');

function index(arrayOfProducts){

    return arrayOfProducts.map((eachProduct)=> eachProduct.id+" "+ eachProduct.name).join("/n");

}


function show(arrayOfProducts,productId){
    const productToFind= arrayOfProducts.find((product)=> product.id === productId);

    return chalk.blue(productToFind.id) + " " + chalk.blue(productToFind.name) + " " + chalk.blue(productToFind.priceInCents + " " +chalk.blue(productToFind.inStock));

}

function create (products, productName,productPriceInCents,productInStock) {
    const newProduct = {
        id: nanoid(4),
      name: productName,
     priceInCents: productPriceInCents,
      inStock: productInStock
      
      
    };
    products.push(newProduct);
    return products;
}


function destroy(products, productId) {
    const index = products.findIndex((product) => product.id === productId);
    if (index > -1) {
      products.splice(index, 1);
      inform("Product successfully removed from collection");
      return products;
    } else {
      inform("Product not found. No action taken");
      return products;
    }
}
function edit(products, productId, updatedProduct,updatedPriceInCents,updatedInStock) {
    const index = products.findIndex((product) => product.id === productId);
    if (index > -1) {
        products[index].id = productId;
        products[index].name = updatedProduct;
        products[index].priceInCents = updatedPriceInCents
        products[index].inStock = updatedInStock;
        inform("Product successfully updated");
        return products;
    } else {
        inform("Product not found. No action taken");
        return products;
    }
}

function updateShoppingCart (products, productName,productPriceInCents,productInStock) {
    const newProduct = {
        id: nanoid(1),
      name: productName,
     priceInCents: productPriceInCents,
      inStock: productInStock
      
      
    };
    products.push(newProduct);
    return products;
}


module.exports = { index, show, create, destroy, edit ,updateShoppingCart}