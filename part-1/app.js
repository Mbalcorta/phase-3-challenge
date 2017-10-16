const express = require('express')
const app = express()

app.use(require('./routes/get'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})