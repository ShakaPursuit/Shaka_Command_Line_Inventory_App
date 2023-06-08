const inform = console.log
const chalk = require('chalk');
const nanoid= require('nanoid');
const faker = require('@faker-js/faker');
//let id= nanoid()
function index(products){

    return products.map((eachProduct)=> eachProduct.id+" "+ eachProduct.name).join("/n");

}


function show(arrayOfProducts,productId){
    const product= arrayOfProducts.find((product)=> product.id === productId);
    if(product){

    return product.id + " " + chalk.blue(product.name) + " " + chalk.blue(product.priceInCents + " " +chalk.blue(product.inStock));
    }
}


function create (products, productName,productPriceInCents,productInStock) {
    const product = {
        id:nanoid(5),
      name: productName,
     priceInCents: productPriceInCents,
      inStock: productInStock
      
      
    };
    products.push(product);
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

function updateShoppingCart(products, productId) {
 const  product =products.find((el => el.id === productId && el.inStock=== true))



   return products.push(product);

};

function emptyShoppingCart(products) {
   
     index = products.findIndex((el)=>{
    if(el&&( index>-1)){
        return products.slice(index,1)


    }
  
})}
     
  
  

    
    



module.exports = { index, show, create, destroy, edit ,updateShoppingCart,emptyShoppingCart}