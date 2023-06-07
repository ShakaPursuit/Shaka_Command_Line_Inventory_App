const {readJSONFile, writeJSONFile}= require("./src/helpers")

const{index, show, create, destroy, edit}= require("./src/appController")

let updatedCart = writeJSONFile('data',"cart.json")

function run(){
    inform("Welcome to Shakas Mobile Phone Inventory App!")

    let products =readJSONFile("data","products.json")
    console.log("Here is the Data Read", products)

  

    const action= process.argv[2];
    const product = process.argv[3];

    let writeToFile = false;

    switch (action){
        
        case "index":
            const productsView = index(products);
            inform(productsView);
            break;

        case "show":
            const productViewShow = show(products,product);
            inform(productViewShow);
            break;

        case "create":
            updatedProducts= create(products, product);
            writeToFile = true;
            break;

        case "update":
            updatedProducts= edit(products, product, process.argv[4]);
            writeToFile = true;
            break;

         case "destroy":
            updatedAProducts = destroy(products, product);
            writeToFile = true;
            break;
            
         
    
        default:
                inform("Alert, action not possible");
        }
    



    }

    
run()


function updateShoppingCart(){
    let products =readJSONFile("data","products.json")
    //console.log("Here is the Data Read", products)

  

    const action= process.argv[2];
    const product = process.argv[3];
    switch (action){

    case "updateCart":
    updatedCart(products, product, process.argv[4]);
            writeToFile = true;
            break;
            
            
            
            default:
                inform("Alert, action not possible");
        }
}

updateShoppingCart()