const assert = require('chai').assert
const mocha = require('mocha')
const {resetDB, addOneOrder, addOneItem, addOneShopper} = require('./dbUtilities')
const {getActiveShoppers, shoppersOrders, productList} = require('../database/database')

describe('Grocery Store query functions', function(){
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
    describe('When a request is made for a specific type of product', function(){
      context('Such as dairy item', function(){
        it('It will return only items that belong to that products category', function(){
          return productList('dairy')
          .then(function(data){
            assert.equal(data.length, 1)
          })
        })
      })
      context('Such as packaged item', function(){
        it('It will return only items that belong to that products category', function(){
          return productList('packaged')
          .then(function(data){
            assert.equal(data.length, 2)
          })
        })
      })
    })
    describe('When product type does not exist', function(){
      it('It will not return any items', function(){
        return productList('candies')
        .then(function(data){
          assert.equal(data.length, 0)
        })
      })
    })
  })
})