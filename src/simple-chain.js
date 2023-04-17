const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },


  addLink(value) {
    if(value === null){
      
      this.chain.push("null");
      return this;
    }
    else if(value === undefined){
        this.chain.push("");
      return this;
    }
    else{
      this.chain.push(String(value));
      console.log(this.chain)
    }
    return this;
  },


  removeLink(position) {
    

    if(typeof position !="number"){
      this.chain=[];
      throw new Error("You can\'t remove incorrect link!");
    }
    else if((position<=0 || position>this.chain.length)){
      this.chain=[];
      throw new Error("You can\'t remove incorrect link!");
    }
    else{
      this.chain.splice(position-1,1);
      console.log(this.chain)
      return this
    }


  },
  reverseChain() {
   this.chain.reverse();
   console.log("reverse", this.chain)
   return this
  },


  finishChain() {
   let str="";

   for(let i=0; i<this.chain.length; i++){
    str=str+`( ${this.chain[i]} )~~`;
   }



   this.chain=[];

  return str.slice(0, str.length-2);

  }
};



console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
// chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain()
module.exports = {
  chainMaker
};
