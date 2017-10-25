const assert = require('chai').assert
const mocha = require('mocha')
const {resetDB, addOneOrder, addOneItem, addOneShopper} = require('./dbUtilities')
const {getActiveShoppers, shoppersOrders, productList} = require('../database/database')

describe('Grocery Store query functions', function(){
//   beforeEach(() => resetDB()
// console.log('first'))
beforeEach(resetDB)

  describe('Active shoppers function', function(){
    it('It will return only users who have orders', function(){
     return getActiveShoppers()
       .then(function(data){
         assert.equal(data.length, 3)
       })
    })
    describe('When a new shopper makes an order', function() {
      beforeEach(() => {
        addOneOrder(2)
        .then(() => {
          addOneItem(8,6)
        })
      })
      it('It will return only users who have orders', function(){
       return getActiveShoppers()
       .then(function(data){
         assert.equal(data.length, 4)
       })
      })
    })
    describe('When a new shopper is added but does not make an order', function(){
      beforeEach(()=>{
        addOneShopper('kiki')
      })
      it('It will return only users who have orders', function(){
        return getActiveShoppers()
        .then(function(data){
          assert.equal(data.length, 3)
        })
      })
    })
  })
  describe('Product list function', function(){

  })
})