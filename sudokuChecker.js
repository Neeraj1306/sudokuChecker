//traverse through each cell of sudoku, and while traversing the same number is not present in corresponding row, column or 3*3 grid.

function isValidSolution(sudoku){
    function check(arr){
      
      return arr.sort()
      .filter(function(val, index){
        return val===index+1;
      })
      
      
    }
  
    for(let i=0;i<9;i++){
      var col=[ ];//column
      var row=[ ];//row
      var box=[ ];//3*3 grid
      for(var j=0;j<9;j++){
        col.push(sudoku[j][i]);
        
        row.push(sudoku[i][j]);
        
        box.push(sudoku[Math.floor(j/3)+(i%3)*3][j%3+Math.floor(i/3)*3]);
        
      }
      // console.log("col",col);
      // console.log("row",row);
      // console.log("box",box);
      if(!check(col) || !check(row) || !check(box)) return false;
    }
    return true;
  }
  
  console.log(isValidSolution([
    [1,2,3,4,5,6,7,8,9],
    [7,8,9,1,2,3,4,5,6],
    [4,5,6,7,8,9,1,2,3],
    [3,1,2,8,4,5,9,6,7],
    [6,9,7,3,1,2,8,4,5],
    [8,4,5,6,9,7,3,1,2],
    [2,3,1,5,7,4,6,9,8],
    [9,6,8,2,3,1,5,7,4],
    [5,7,4,9,6,8,2,3,1]
  ])); 
  
  