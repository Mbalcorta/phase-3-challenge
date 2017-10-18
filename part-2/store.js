#!/usr/bin/env node

const {getActiveShoppers, shoppersOrders} = require('./database/database.js')
const firstArgument = process.argv.slice(2)[0];
const secondArg = process.argv.slice(3);

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
  case 'shopper-orders':
    shoppersOrders(parseInt(secondArg[0]))
    .then(data => {
      console.log(data)
      process.exit()
    })
    .catch((error) => {
      console.log(error)
      process.exit()
    })
  break;
}