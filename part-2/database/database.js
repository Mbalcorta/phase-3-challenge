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

module.exports = {getActiveShoppers}