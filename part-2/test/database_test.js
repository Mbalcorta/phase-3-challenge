const expect = require('chai').assert
const mocha = require('mocha')
const {getActiveShoppers, shoppersOrders, productList, database} = require('../database/database')

describe("active shopper query", function(){
  beforeEach((done) => {
     database.query('DROP TABLE orders')
     .then(done())
     .catch(console.error)
    })
describe('when given a task', function(){
  it("it will post task to database", function(done){
    getActiveShoppers()
    .then(function(data){
      console.log(data)
      done()
      })
    })
  })
})