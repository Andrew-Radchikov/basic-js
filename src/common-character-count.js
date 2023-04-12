const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2) {
  
let letters1={};
let letters2={};

let arr1=s1.split("");
let arr2=s2.split("");


for(let i=0; i<arr1.length; i++){
  if(arr1[i] in letters1){
    letters1[arr1[i]]=letters1[arr1[i]]+1;
  }
  else{
    letters1[arr1[i]]=1;
  }
}


for(let i=0; i<arr2.length; i++){
  if(arr2[i] in letters2){
    letters2[arr2[i]]=letters2[arr2[i]]+1;
  }
  else{
    letters2[arr2[i]]=1;
  }
}

let count=0;

for(let key in letters1){
  if(key in letters2){
    count=count+Math.min(letters1[key], letters2[key]);
  }
}

return count;


}




module.exports = {
  getCommonCharacterCount
};
