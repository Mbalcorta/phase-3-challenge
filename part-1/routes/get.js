const router = require('express').Router()
const dayValue = require('../js/getFunc')

router.get('/api/days/:day', function (req, res) {
  let query = req.params.day
  dayValue(query)
  .then(response => {
    res.send(response)
  })
  .catch((error) => {
    console.log(error)
    res.send(error)
  })
})

module.exports = router