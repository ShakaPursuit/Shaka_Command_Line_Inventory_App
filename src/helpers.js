const { readFileSync, writeFileSync } = require("node:fs")
//const fs = require('fs');

//const chalk = require('chalk');

//const { nanoid } = require('nanoid');

//const id =nanoid();

const {faker} = require('@faker-js/faker')


//console.log(faker.string.uuid())




function readJSONFile(path, fileName){

    const object = readFileSync(`${path}/${fileName}`, "utf-8")
    return object ? JSON.parse(object) : []
}


function writeJSONFile(path, fileName, data){

    data = JSON.stringify(data)
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })
}




module.exports = {
    readJSONFile, 
    writeJSONFile,
    //chalk,
    //id,
    //nanoid
}