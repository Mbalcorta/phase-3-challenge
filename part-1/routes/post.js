const router = require('express').Router()
const concat = require('../js/postFunc')

router.post('/api/array/concat', function (request, response) {
  const requestObject = request.body
  concat(requestObject)
  .then(concatArray => {
    response.set('Content-Type', 'application/json')
    response.status(200).send(concatArray)
  })
  .catch((error) => {
    response.set('Content-Type', 'application/json')
    response.status(400).send(error)
  })
})

module.exports = router