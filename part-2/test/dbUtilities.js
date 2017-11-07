const {database} = require('../database/database.js')

const initDB = () => {
  const tables = ['items', 'shoppers', 'orders_items', 'orders']
  return Promise.all(tables.map(table =>
      database.none(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`)
    ))
    .catch(console.error)
}

const seedShoppers = () => {
  const sql = 'INSERT INTO shoppers(name) VALUES($1)';
  return database.none(sql, 'Jenny')
  .then(()=> database.none(sql, 'Sebastian'))
  .then(()=> database.none(sql, 'Heather'))
  .then(()=> database.none(sql, 'Sal'))
  .then(()=> database.none(sql, 'OJ'))
  .then(()=> database.none(sql, 'Sunshine'))
  .catch(console.error)
}

const seedOrders = () => {
  const sql='INSERT INTO orders(shopper_id) VALUES($1)';
  return database.none(sql, 1)
  .then(()=> database.none(sql, 1))
  .then(()=> database.none(sql, 4))
  .then(()=> database.none(sql, 4))
  .then(()=> database.none(sql, 3))
  .then(()=> database.none(sql, 3))
  .then(()=> database.none(sql, 3))
  .catch(console.error)
}

const seedGroceryItems = () => {
  //first need to insert each item one at a time. once each item is included keep doing .then
  const sql = 'INSERT INTO items(name, price, section) VALUES(${name}, ${price}, ${section})'
  return database.none(sql, {name: 'Apples',price: 2.99, section: 'produce'})
  .then(()=> database.none(sql, {name: 'Bacon',price: 9.01, section: 'meat'}))
  .then(()=> database.none(sql, {name: 'Barbeque Sauce',price: 16.96, section: 'packaged'}))
  .then(()=> database.none(sql, {name: 'Carrots',price: 2.88, section: 'produce'}))
  .then(()=> database.none(sql, {name: 'Cheese',price: 1.75, section: 'dairy'}))
  .then(()=> database.none(sql, {name: 'Coffee',price: 6.17, section: 'packaged'}))
  .catch(console.error)

}

const seedOrderItems = () => {
  const orderItems =
  [{orders_id: 1, items_id: 1},
  {orders_id: 1, items_id: 2},
  {orders_id: 1, items_id: 1},
  {orders_id: 2, items_id: 4},
  {orders_id: 3, items_id: 6},
  {orders_id: 4, items_id: 4},
  {orders_id: 4, items_id: 5},
  {orders_id: 5, items_id: 5},
  {orders_id: 6, items_id: 2},
  {orders_id: 7, items_id: 3}]
  return Promise.all(orderItems.map(item =>
    database.none('INSERT INTO orders_items(orders_id, items_id) VALUES(${orders_id}, ${items_id})', item))
  ).catch(console.error)
}

const resetDB = () =>
  initDB()
.then(seedShoppers)
.then(seedOrders)
.then(seedGroceryItems)
.then(seedOrderItems)
.catch(console.error)



const addOneOrder = (shopper_id) =>
database.none('INSERT INTO orders(shopper_id) VALUES($1)', [shopper_id])
.catch(console.error)

const addOneItem = (orders_id, items_id) =>
database.none('INSERT INTO orders_items(orders_id, items_id) VALUES($1, $2)', [orders_id, items_id])
.catch(console.error)

const addOneShopper = (name) =>
database.none('INSERT INTO shoppers(name) VALUES($1)', [name])
.catch(console.error)

module.exports = { resetDB, addOneOrder, addOneItem, addOneShopper}

