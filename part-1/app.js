const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(require('./routes/get'))
app.use(require('./routes/post'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})