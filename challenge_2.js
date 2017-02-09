/*Based on the description of Pascal's Triangle, create a function that takes number of rows
as an argument, and then prints out Pascal's triangle up to the number of rows specified.*/

function printPascalTriangle(inputRows){
  var result = [];
  
  for (var i = 0; i < inputRows; i++) { 
    result[i] = new Array(i+1);
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i-1][j-1] + result[i-1][j];
      }
    }
  }
  
  return result;
}
// console.table(printPascalTriangle(6)); ---> Prints the pascal triangle in table format