const {readJSONFile, writeJSONFile}= require("./src/helpers")

const{index, show, create, destroy, edit,updateShoppingCart,emptyShoppingCart}= require("./src/appController")

const fs = require('fs');
const inform= console.log

function run(){

    let products =readJSONFile("data","products.json")
    let cart = readJSONFile('data',"cart.json")
    console.log("Here is the Data Read", products);

  

    const action= process.argv[2];
    const product = process.argv[3];
    let updatedProducts = [];
reallyUpdatedCart=[];

    let writeToFile = false;

    inform("Welcome to Shakas Mobile Phone Inventory App!")

    
    switch (action){
        
        case "index":
            const productsView = index(products);
            inform(productsView);

    
            break;

        case "show":
            const productView = show(products,product);
            inform(productView);
            
            break;

        case "create":
            updatedProducts= create(products, product);
            writeToFile = true;
            
            
            break;

        case "edit":
            updatedProducts= edit(products, product, process.argv[4]);
            writeToFile = true;
            
            break;

         case "destroy":
            updatedProducts = destroy(products, product);
            writeToFile = true;
            
            
            break;
           
         case "updateShoppingCart":{
        reallyUpdatedCart= updateShoppingCart(products,product,cart);
          // JSON.parse(products.push(reallyUpdatedCart))
                        writeToFile = true;
                       
                        
     
//products.push(cart);
     

                        
                        if (writeToFile) 
                            writeJSONFile("data", "cart.json",reallyUpdatedCart);
                        break;
         }
                        
         case "emptyShoppingCart":{
                            reallyUpdatedCart= emptyShoppingCart(products, cart,product,process.argv[4]);
                                    writeToFile = true;
                                    if (writeToFile) 
                                        writeJSONFile("data", "cart.json",updatedProducts);
                                    break;
                                    }
                                    
     
    
       default:
                inform ("Alert, action not possible");
     
        }
    
    if (writeToFile && "case" ==="show") {
      writeJSONFile("data", "products.json",  updatedProducts);
    }
    

}

    

    
run();







