const { readFileSync, writeFileSync } = require("node:fs");


const fs = require('fs');

//const chalk = require('chalk');

//const { nanoid } = require('nanoid');

//const id =nanoid();

//const {faker} = require('@faker-js/faker')


//console.log(faker.string.uuid())




function readJSONFile(path, fileName){

    const object = readFileSync(`${path}/${fileName}`, "utf-8");
    return object ? JSON.parse(object) : [];
}


function writeJSONFile(path, fileName, data){
   
    data = JSON.stringify(data)
    //fileName= readFileSync("/data/cart.json")

//    json =JSON.parse(file.toString())
//   data = JSON.stringify(json)

//    data.push(file)
   

    return writeFileSync(`${path}/${fileName}`,(data),{ encoding: "utf-8" });//
}





module.exports = {
    readJSONFile, 
    writeJSONFile,
    //chalk,
    //id,
    //nanoid
};