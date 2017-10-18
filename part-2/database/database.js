const pgp = require('pg-promise')()

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'grocery_store'
}

const database = pgp(connection)

const getActiveShoppers = () => {
  return database.any('SELECT count(o.shopperid) AS orders, s.name FROM orders o JOIN shoppers s ON(s.shopperid = o.shopperid) GROUP BY o.shopperid, s.name')
}

const shoppersOrders = (param) => {
  return database.any(`SELECT i.orderid, SUM(g.price) AS total_cost FROM orders o JOIN orderitems i ON(i.orderid = o.orderid) JOIN grocery_items g ON(g.itemid = i.groceryitem)WHERE o.shopperid = ${param} GROUP BY i.orderid`)
}

module.exports = {getActiveShoppers, shoppersOrders}