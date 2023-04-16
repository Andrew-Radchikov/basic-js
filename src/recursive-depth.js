const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(){

  }
      
  calculateDepth(arr) {
      let deepArray=[];
if(arr[0] == undefined){
  return 1;
}

      for(let i=0; i<arr.length; i++){
          if(Array.isArray(arr[i])){
            deepArray.push(this.calculateDepth(arr[i])+1);
          }
          else{
            deepArray.push(1);
          }

      }
      console.log(deepArray);
      return getMaxOfArray(deepArray);
    }

   

 

}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]) )

module.exports = {
  DepthCalculator
};
