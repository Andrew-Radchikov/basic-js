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
    if(value == undefined){
      this.chain.push("");
    }
    else{
    this.chain.push(String(value));
    }
    return this;
  },
  removeLink(position) {
    
    if(typeof position !="number"){
      throw new Error("You can\'t remove incorrect link!");
    }
    else{
      this.chain=this.chain.splice(0,position-1).concat(this.chain.splice(position-1, this.chain.length));
      return this}


  },
  reverseChain() {
   this.chain.reverse();
   return this
  },
  finishChain() {
   let str="";

   for(let i=0; i<this.chain.length; i++){
    str=str+`( ${this.chain[i]} )~~`;
   }
   return str.slice(0, str.length-2);

  }
};



// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());

module.exports = {
  chainMaker
};
