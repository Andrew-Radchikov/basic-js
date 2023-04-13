const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr=str.split("");
  console.log(arr);
  let codeStr="";

  let n=1;
  let simbol="";

  for(let i=0; i<arr.length+1; i++){
      if(arr[i] == simbol){
        n=n+1;
      }
      else{
        if(n==1){
          codeStr=codeStr+`${simbol}`;
        }
        else{
        codeStr=codeStr+`${n}${simbol}`;
      }
        simbol=arr[i];
        n=1;
        console.log(codeStr);
      }
  }
  // codeStr=codeStr+simbol;

return codeStr;

}

module.exports = {
  encodeLine
};
