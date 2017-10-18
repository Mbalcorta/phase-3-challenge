const {database} = require('../database/database.js')

const initDB = () => {
  const tables = ['grocery_items', 'shoppers', 'orderitems', 'orders']
   return database.tx(t => {
    const queries = tables.map(table => {
        return t.none(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`);
    })
      return t.batch(queries)
    })
    .then(data => {
      return data
    })
    .catch(console.error)
}

const seedShoppers = () => {
  const names = ['Jenny', 'Sebastian', 'Heather', 'Sal', 'OJ', 'Sunshine']
  return database.tx(t => {
    const queries = names.map(name => {
        return t.none('INSERT INTO shoppers(name) VALUES($1)', [name]);
    })
      return t.batch(queries)
    })
    .then(data => {
      return data
    })
    .catch(console.error)
}

const seedOrders = () => {
  const orders = [1, 1, 4, 4, 3, 3, 3]
  return database.tx(t => {
    const queries = orders.map(order => {
      return t.none('INSERT INTO orders(shopperid) VALUES($1)', [order]);
    })
      return t.batch(queries);
    })
    .then(data => {
      return data
    })
    .catch(console.error);
}

const seedGroceryItems = () => {
  const items =
  [{itemname: 'Apples',price: 2.99, section: 'produce'},
  {itemname: 'Bacon',price: 9.01, section: 'meat'},
  {itemname: 'Barbeque Sauce',price: 16.96, section: 'packaged'},
  {itemname: 'Carrots',price: 2.88, section: 'produce'},
  {itemname: 'Cheese',price: 1.75, section: 'dairy'},
  {itemname: 'Coffee',price: 6.17, section: 'packaged'}]
  return database.tx(t => {
    const queries = items.map(item => {
      return t.none('INSERT INTO grocery_items(itemname, price, section) VALUES(${itemname}, ${price}, ${section})', item);
    })
      return t.batch(queries);
    })
    .then(data => {
      return data
    })
    .catch(console.error);
}

const seedOrderItems = () => {
  const orderItems =
  [{orderID: 1, groceryItem: 1},
  {orderID: 1, groceryItem: 2},
  {orderID: 1, groceryItem: 1},
  {orderID: 2, groceryItem: 4},
  {orderID: 3, groceryItem: 6},
  {orderID: 4, groceryItem: 4},
  {orderID: 4, groceryItem: 5},
  {orderID: 5, groceryItem: 5},
  {orderID: 6, groceryItem: 2},
  {orderID: 7, groceryItem: 3}]
  return database.tx(t => {
    const queries = orderItems.map(item => {
      return t.none('INSERT INTO orderitems(orderID, groceryItem) VALUES(${orderID}, ${groceryItem})', item);
    })
      return t.batch(queries);
    })
    .then(data => {
      return data
    })
    .catch(console.error);
}


const resetDB = () => initDB()
.then(seedShoppers)
.then(seedOrders)
.then(seedGroceryItems)
.then(seedOrderItems)

module.exports = { resetDB }