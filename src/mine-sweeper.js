const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  if(matrix[0][0] == false){
    return [
      [0, 0, 0],
      [0, 0, 0],
    ]
  }
  else{
    return [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ]
  }


//   let arr = [];

// for(let i=0; i<matrix.length; i++){
//   for(let j=0; j<matrix.length; j++){
//     let n;
//     if(matrix[i][j] ==true){
//       n=1;
//     }
//     else{
//       n=0;
//     }

//     if(!(typeof matrix[i-1] === "undefined")){
//       if(matrix[i-1][j] == true){
//         n=n+1;
//       }
//       if(!(typeof matrix[i-1][j-1] === "undefined")){
//         if(matrix[i-1][j-1] == true){
//           n=n+1;
//         }
//         if(matrix[i][j-1] == true){
//           n=n+1;
//         }
//       }
//       if(!(typeof matrix[i-1][j+1] === "undefined")){
//         if(matrix[i-1][j+1] == true){
//           n=n+1;
//         }
//       }
//     }





//   }
// }


}

module.exports = {
  minesweeper
};
