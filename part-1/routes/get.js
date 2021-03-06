const router = require('express').Router()
const dayValue = require('../js/getFunc')

router.get('/api/days/:day', function (request, response) {
  const { day } = request.params

  dayValue(day)
    .then(data => {
      response.set('Content-Type', 'text/plain')
      response.status(200).send((data).toString())
    })
    .catch((error) => {
      response.status(400).send(error)
    })
})

module.exports = router