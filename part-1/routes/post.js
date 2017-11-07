const router = require('express').Router()
const concat = require('../js/postFunc')

router.post('/api/array/concat', function (request, response) {
  const { array1, array2 } = request.body

  concat(array1, array2)
    .then(concatArray => {
      response.set('Content-Type', 'application/json')
      response.status(200).json({'result': concatArray})
    })
    .catch((error) => {
      response.set('Content-Type', 'application/json')
      response.status(400).json(error)
    })
})

module.exports = router