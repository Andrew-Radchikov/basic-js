const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  console.log(sampleActivity);
  if(typeof sampleActivity != "string"){
   
    return false;
  }
  if(sampleActivity === "NaN"){
    return false;
  }
  let x=Number(sampleActivity);
   if(typeof x != "number"){
    return false;
  }
  if(isNaN(x)){
     return false;
  }
 
  if(x<=0 || x>15){
    return false;
  }
   let res=Math.ceil((Math.log(MODERN_ACTIVITY / x)* HALF_LIFE_PERIOD)/Math.log(2));
   
  return res


}



module.exports = {
  dateSample
};
