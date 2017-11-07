 const daysOfWeek = {
   monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7
 }

 const dayValue = (day) => {
   return new Promise((resolve, reject) => {
     if(daysOfWeek.hasOwnProperty(day)){
      resolve(daysOfWeek[day])
     }
     reject(`'${day}' is not a valid day!`)
   })
  }

 module.exports = dayValue