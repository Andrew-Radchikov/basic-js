const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */




function getSeason( date ) {
   
  if(arguments.length == 0){
    return 'Unable to determine the time of year!';
   
  }

  if(Number.isNaN(Date.parse(date))){
    throw new Error('Invalid date!');
  }


  if(Object.getOwnPropertySymbols(date).length > 0){
    throw new Error('Invalid date!');
   }


 
let month=date.getMonth()

if(month<5 && month >1){
  return "spring";
}
else if(month<8 && month >4){
  return "summer";
}
else if(month<11 && month >7){
  return "autumn";
}
else{
  return "winter"
}


}


const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

// console.log(getSeason(deeperFakeDate))
// console.log(getSeason(new Date(1601, 0, 0, 16, 26, 37, 664)))



module.exports = {
  getSeason
};
