const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */


let arr="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
class VigenereCipheringMachine {

constructor(boo){

  if(arguments.length > 1){
    throw new Error('Incorrect arguments!');
  }
  else if(arguments.length ==1){
  this.revers=boo;
  }
  else{
    this.revers=true;
  }
}

  encrypt(message, key) {

    if(arguments.length != 2){
      throw new Error('Incorrect arguments!');
    }
    if(message == undefined){
      throw new Error('Incorrect arguments!');
    }


    let bigMessage=message.toUpperCase().split("");
    let keyLength=key.length;
    let newKey=key.toUpperCase().split("");
    let realKey=[];
    for(let j=0; j<keyLength;j++){
        realKey.push(arr.indexOf(newKey[j],0));
    }

 
    let rez="";
    let n=0;

    for(let i=0; i<bigMessage.length; i++){
        if(arr.includes(bigMessage[i])){
          let sdvig=(arr.indexOf(bigMessage[i],0)+realKey[n]) % 26;
          rez=rez+arr[sdvig];
        
          if(n == keyLength-1){
            n=0;
          }
          else{
          n=n+1;
        }


        }
        else{
          rez=rez+bigMessage[i];
        }

     
    }

    if(this.revers){
      return rez
    }
    else{
      return rez.split('').reverse().join('');
    }


    

  }




  decrypt(message, key) {
   if(arguments.length != 2){
    throw new Error('Incorrect arguments!');
  }
  if(message == undefined){
    throw new Error('Incorrect arguments!');
  }


   


    let bigMessage=message.toUpperCase().split("");
    let keyLength=key.length;
    let newKey=key.toUpperCase().split("");
    let realKey=[];
    for(let j=0; j<keyLength;j++){
        realKey.push(arr.indexOf(newKey[j],0));
    }

    let rez="";
    let n=0;

    for(let i=0; i<bigMessage.length; i++){
      if(arr.includes(bigMessage[i])){
        let sdvig=(arr.indexOf(bigMessage[i],0)-realKey[n]+26) % 26;
        rez=rez+arr[sdvig];
      
        if(n == keyLength-1){
          n=0;
        }
        else{
        n=n+1;
      }
  


      }
      else{
        rez=rez+bigMessage[i];
      }

   
  }


 
  if(this.revers){
    return rez
  }
  else{
    return rez.split('').reverse().join('');
  }


}

}



const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
  VigenereCipheringMachine
};
