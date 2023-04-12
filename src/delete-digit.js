const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 * */
function deleteDigit(n) {
 
let str=String(n);


let arr=[];

for(let i=0; i<str.length; i++){
  let newNumber = Number(str.slice(0, i) + str.slice(i+1));
  arr.push(newNumber)
}

let maxNumber=arr[0];
for(let i=1; i<arr.length; i++){
  if(arr[i]>maxNumber){
    maxNumber=arr[i]
  }
}

return maxNumber;


}


deleteDigit(1052);

module.exports = {
  deleteDigit
};
