#!/usr/bin/env node

const {getActiveShoppers} = require('./database/database.js')
const firstArgument = process.argv.slice(2)[0];
// const taskString = process.argv.slice(3).join(' ');

switch(firstArgument){
  case 'real-shoppers' :
    getActiveShoppers()
    .then(data => {
      data.forEach(eachElement => {
        process.stdout.write(`Shopper name: ${eachElement.name} Number Of Orders: ${eachElement.orders}\n`)
      })
      process.exit()
    })
    .catch((error) => {
      console.log(error)
      process.exit()
    })
    break;
}