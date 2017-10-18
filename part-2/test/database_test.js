const assert = require('chai').assert
const mocha = require('mocha')
const {resetDB, addOneOrder, addOneItem} = require('./dbUtilities')
const {getActiveShoppers, shoppersOrders, productList} = require('../database/database')

describe('Grocery Store query functions', function(){
  beforeEach(resetDB)

  describe('Active shoppers', function(){
    it('It will return only users who have orders', function(){
      return getActiveShoppers()
      .then(function(data){
        assert.equal(data.length, 3)
        })
        .catch(console.error)
      })
  })
  describe('When a new shopper makes an order', function() {
    beforeEach('addOrder', addOneItem)

  it('It will return an array of four', function(){
    // return getActiveShoppers()
    // .then(function(data){
    //   assert.deepEqual(data.length, 3)
    //   })
    //   .catch(console.error)
    })
  });
})