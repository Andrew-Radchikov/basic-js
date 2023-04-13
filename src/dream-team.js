const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members) {
    if(!Array.isArray(members)){
        return false;
    }
    
    let FirstNameLetters=[];

    for(let i=0; i<members.length; i++){
        if(typeof members[i] == 'string'){
          let newstr=members[i].trim();
            FirstNameLetters.push(newstr[0].toUpperCase());
        }
    }

 FirstNameLetters.sort();

 let teamName='';
 for (let i=0; i<FirstNameLetters.length; i++){
  teamName+=FirstNameLetters[i];
 }

return teamName;

}

module.exports = {
  createDreamTeam
};
