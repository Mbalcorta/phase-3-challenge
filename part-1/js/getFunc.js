 const daysOfWeek = {
   monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7
 }

 const dayValue = (query) => {
   return new Promise((resolve, reject) => {
     if(daysOfWeek.hasOwnProperty(query)){
       for(var day in daysOfWeek) {
         if(day === query) {
           resolve(daysOfWeek[day])
         }
       }
     }
     reject(`'${query}' is not a valid day!`)
   })
  }

 module.exports = dayValue