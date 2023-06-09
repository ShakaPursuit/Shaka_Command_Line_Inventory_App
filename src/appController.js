const inform = console.log
const chalk = require('chalk');
const {nanoid}= require('nanoid');
const faker = require('@faker-js/faker');

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
   
    if (process.argv[2]="create"){
    const product = {
       

       id : nanoid(4),
      name: process.argv[3],//productName,
     priceInCents: process.argv[4],//productPriceInCents,
      inStock: process.argv[5]// productInStock
       
      
      
    };
    products.push(product);
    return products;
}
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
function edit(products, productId, updatedName,updatedPriceInCents,updatedInStock) {
    const index = products.findIndex((product) => product.id === productId);
    if (index > -1) {
        products[index].id = productId||process.argv[3];
        products[index].name = updatedName||process.argv[4];
        products[index].priceInCents = updatedPriceInCents||process.argv[5];
        products[index].inStock = updatedInStock||process.argv[6];
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