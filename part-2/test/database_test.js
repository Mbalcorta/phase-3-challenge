const expect = require('chai').assert
const mocha = require('mocha')
const { resetDB } = require('./dbUtilities')
const {getActiveShoppers, shoppersOrders, productList, database} = require('../database/database')

describe("active shopper query", function(){
  beforeEach('reset the db', resetDB)
  describe('when given a task', function() {
  it("it will post task to database", function(done){
    getActiveShoppers()
    .then(function(data){
      console.log(data)
      done()
      })
    })
  })
})