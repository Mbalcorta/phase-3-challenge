const pgp = require('pg-promise')()

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'grocery_store'
}

const database = pgp(connection)

const getActiveShoppers = () => {
  return database.any('SELECT * FROM shoppers')
}

module.exports = {getActiveShoppers}