const pgp = require('pg-promise')()

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'grocery_store'
}

const database = pgp(connection)

const getAll = () => {
  return database.any(
    'SELECT * FROM grocery_items'
  ).then(data => {
    console.log(data)
  })
  .catch(console.error)
}

getAll()