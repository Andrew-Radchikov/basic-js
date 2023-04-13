const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {
  let myStr;
  console.log(typeof str)

  if(typeof str != "string"){

      myStr=String(str);

      
  }
  else{
    myStr=str;
  };

  let repeatStr="";
console.log(myStr)



    if("repeatTimes" in options){
      for(let i=0; i<options.repeatTimes; i++){
        
        repeatStr=repeatStr+myStr+generateAdditions(options);
          if("separator" in options){
              if(i != options.repeatTimes-1){
                repeatStr=repeatStr+options.separator;
              }
            }
          else{
            if(i != options.repeatTimes-1){
              repeatStr=repeatStr+"+";
            }
          }
          
      }
      


    }
    else{
      repeatStr=repeatStr+myStr+generateAdditions(options);
    }
return repeatStr;



}


function generateAdditions(options){
  console.log(typeof options.addition)
  if("addition" in options){
      let str="";
      let myAddition;
      if(typeof options.addition != "string"){

        
            myAddition=String(options.addition);

              
      }
      else{
        myAddition=options.addition;
      };
      


      if("additionRepeatTimes" in options){
        for(let i=0; i<options.additionRepeatTimes; i++){
            str=str+myAddition;
            if("additionSeparator" in options){
                if(i != options.additionRepeatTimes-1){
                  str=str+options.additionSeparator;
                }
              }
            else{
              if(i != options.additionRepeatTimes-1){
                str=str+"|";
              }
            }
           
        }
        


      }
      else{
        str=str+myAddition;
      }
return str;

  } 
  
  else{
    return "";
  }


}
const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};

module.exports = {
  repeater
};
