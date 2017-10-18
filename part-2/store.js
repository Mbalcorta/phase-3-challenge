#!/usr/bin/env node

const {getActiveShoppers, shoppersOrders, productList} = require('./database/database.js')
const print = require('node-print')
const firstArgument = process.argv.slice(2)[0];
const secondArg = process.argv.slice(3);

switch(firstArgument){
  case 'real-shoppers' :
    getActiveShoppers()
    .then(data => {
      if(!module.parent){
        print.pt(data)
      }
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
      if(!module.parent){
        print.pt(data)
      }
      process.exit()
    })
    .catch((error) => {
      console.log(error)
      process.exit()
    })
  break;
  case 'product-list':
    productList(secondArg[0])
    .then(data => {

     if(!module.parent){
        print.pt(data)
      }
      process.exit()
    })
    .catch((error) => {
      console.log(error)
      process.exit()
    })
  break;
  default:
  if(!module.parent){
    process.stdout.write('Error: not a correct command, please try again\n')
    process.exit()
  }
}