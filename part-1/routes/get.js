const router = require('express').Router()

router.get('/', function (req, res) {
  res.send('I work!')
})

module.exports = router