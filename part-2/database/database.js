const pgp = require('pg-promise')()
const db = process.env.NODE_ENV !== 'test' ? 'grocery_store' : 'grocery_store_test'
const connection = `postgres://localhost:5432/${db}`
const database = pgp(connection)

const getActiveShoppers = () => {
  return database.any('SELECT s.name AS shopper_name, count(o.shopper_id ) AS number_of_orders  FROM orders o JOIN shoppers s ON(s.id  = o.shopper_id) GROUP BY o.shopper_id, s.name')
}

const shoppersOrders = (param) => {
  return database.any(`SELECT i.orders_id AS order_id, SUM(g.price) AS total_cost FROM orders o JOIN orders_items i ON(i.orders_id = o.id) JOIN items g ON(g.id = i.items_id)WHERE o.shopper_id = ${param} GROUP BY i.orders_id ORDER BY i.orders_id`)
}

const productList = (param) => {
  return database.any(`SELECT i.name AS product_name, i.section FROM items i WHERE section='${param}'`)
}

module.exports = {getActiveShoppers, shoppersOrders, productList, database}