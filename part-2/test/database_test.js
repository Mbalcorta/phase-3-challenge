const assert = require('chai').assert
const mocha = require('mocha')
const {resetDB, addOneOrder, addOneItem, addOneShopper} = require('./dbUtilities')
const {getActiveShoppers, shoppersOrders, productList} = require('../database/database')

describe('Grocery Store query functions', function(){
beforeEach(resetDB)

  describe('Active shoppers function', function(){
    it('It will return only users who have orders', function(){
     return getActiveShoppers()
       .then((data)=>{
         assert.equal(data.length, 3)
       })
    })
    describe('When a new shopper makes an order', function() {
      beforeEach(()=> {
        return addOneOrder(2)
        .then(()=> {
          return addOneItem(8,6)
        })
      })
      it('It will return only users who have orders', function(){
       return getActiveShoppers()
       .then((data)=>{
         assert.equal(data.length, 4)
       })
      })
    })
    describe('When a new shopper is added but does not make an order', function(){
      beforeEach(()=>{
        return addOneShopper('kiki')
      })
      it('It will return only users who have orders', function(){
        return getActiveShoppers()
        .then((data)=>{
          assert.equal(data.length, 3)
        })
      })
    })
    it('It will return array when active shoppers found', function(){
      return getActiveShoppers()
      .then(function(data){
        assert.isArray(data)
      })
    })
    it('It will return an array with number of orders per shopper', function(){
      return getActiveShoppers()
      .then(function(data){
        assert.equal(data[0].number_of_orders, 3)
      })
    })
    it('It will return an array with name of active shoppers', function(){
      return getActiveShoppers()
      .then(function(data){
        assert.equal(data[0].shopper_name, 'Heather')
      })
    })
  })
  describe('Product list function', function(){
    describe('When a request is made for a specific type of product', function(){
      context('Such as dairy item', function(){
        it('It will return only items that belong to that products category', function(){
          return productList('dairy')
          .then((data)=>{
            assert.equal(data.length, 1)
          })
        })
      })
      context('Such as packaged item', function(){
        it('It will return only items that belong to that products category', function(){
          return productList('packaged')
          .then((data)=>{
            assert.equal(data.length, 2)
          })
        })
      })
    })
    describe('When product type does not exist', function(){
      it('It will not return any items', function(){
        return productList('candies')
        .then((data)=>{
          assert.equal(data.length, 0)
        })
      })
    })
    it('It will return array when product type is found', function(){
      return productList('packaged')
      .then((data)=>{
        assert.isArray(data)
      })
    })
    it('It will return product name when it exists', function(){
      return productList('packaged')
      .then((data)=>{
        assert.equal(data[0].product_name, 'Barbeque Sauce')
      })
    })
  })
  describe('Shoppers orders function', function(){
    describe('When user has orderItems', function(){
      it('It will return two orders for shopper number 4', function(){
        return shoppersOrders(4)
        .then((data)=>{
          assert.equal(data.length, 2)
        })
      })
      it('It will contain users first order total cost', function(){
        return shoppersOrders(4)
        .then((data)=>{
          assert.equal(data[0].total_cost, '6.17')
        })
      })
      it('It will return users second order total cost', function(){
        return shoppersOrders(4)
        .then((data)=>{
          assert.equal(data[1].total_cost, '4.63')
        })
      })
      it('It will return order id for first order', function(){
        return shoppersOrders(4)
        .then((data)=>{
          assert.equal(data[0].order_id, 3)
        })
      })
      it('It will return order id for second order', function(){
        return shoppersOrders(4)
        .then((data)=>{
          assert.equal(data[1].order_id, 4)
        })
      })
      it('It will return array when shopper has orders', function(){
        return shoppersOrders(4)
        .then((data)=>{
          assert.isArray(data)
        })
      })
      it('It will return array with order id key', function(){
        return shoppersOrders(4)
        .then((data)=>{
          assert.hasAnyKeys(data[0], 'order_id')
        })
      })
      it('It will return array with total cost key', function(){
        return shoppersOrders(4)
        .then((data)=>{
          assert.hasAnyKeys(data[0], 'total_cost')
        })
      })
    })
  })
})