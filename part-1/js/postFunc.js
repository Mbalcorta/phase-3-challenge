const concat = (array1, array2) => {
  return new Promise((resolve, reject) => {
    if(Array.isArray(array1) && Array.isArray(array2)){
      resolve(array1.concat(array2))
    } else {
      reject({"error": "Input data should be of type Array."})
    }
  })
}

module.exports = concat