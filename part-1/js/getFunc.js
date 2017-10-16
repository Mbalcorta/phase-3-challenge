 const daysOfWeek = {
   monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7
 }

 const dayValue = (query) => {
  const queryNumber = parseInt(query)
   return new Promise((resolve, reject) => {
    for(var day in daysOfWeek) {
      if(daysOfWeek[day] === queryNumber) {
        resolve(day)
      }
    }
     reject(`'${query}' is not a valid day!`)
   })
  }

 module.exports = dayValue