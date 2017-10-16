const concat = (object) => {
  return new Promise((resolve, reject) => {
    if(Array.isArray(Object.values(object)[0]) && Array.isArray(Object.values(object)[1])){
      const concatArray =Object.values(object)[0].concat(Object.values(object)[1])
      const jsonObj = JSON.stringify({'result': concatArray})
      resolve(jsonObj)
    } else {
      const jsonError = JSON.stringify({"error": "Input data should be of type Array."})
      reject(jsonError)
    }
  })
}

module.exports = concat