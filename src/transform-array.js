const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
 
if(!Array.isArray(arr)){
  throw new Error("'arr' parameter must be an instance of the Array!");
}

let newArr=[];
let del=-1;


for (let i=0; i<arr.length; i++){
  if(arr[i] == "--discard-next"){
    if(arr[i+1] != undefined){
      del=i+1;   
    }
       
  }
  else if(arr[i] == "--discard-prev"){
    if(i-1 == del){
         
    }
    else{
      newArr.pop();
    }
   
  }
  else if(arr[i] == "--double-next"){
    if(arr[i+1]!=undefined){
    newArr.push(arr[i+1]); 
    newArr.push(arr[i+1]);
    i++;    
    }
  }
  else if(arr[i] == "--double-prev"){

    if(i-1 == del){
         
    }
    else{
      newArr.push(arr[i-1]);
    }
    
  }
  else{
    if(i!=del){
    newArr.push(arr[i]);
  }
  }
}

return newArr


}



console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
module.exports = {
  transform
};
