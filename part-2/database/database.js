
const pgp = require('pg-promise')()

const connection = process.env.NODE_ENV !== 'test'
  ? 'postgres://localhost:5432/grocery_store'
  : 'postgres://localhost:5432/grocery_store_test'

const database = pgp(connection)

const getActiveShoppers = () => {
  return database.any('SELECT count(o.shopperid) AS orders, s.name FROM orders o JOIN shoppers s ON(s.shopperid = o.shopperid) GROUP BY o.shopperid, s.name')
}

const shoppersOrders = (param) => {
  return database.any(`SELECT i.orderid, SUM(g.price) AS total_cost FROM orders o JOIN orderitems i ON(i.orderid = o.orderid) JOIN grocery_items g ON(g.itemid = i.groceryitem)WHERE o.shopperid = ${param} GROUP BY i.orderid`)
}

const productList = (param) => {
  return database.any(`SELECT i.itemname, i.section FROM grocery_items i WHERE section='${param}'`)
}

module.exports = {getActiveShoppers, shoppersOrders, productList, database}