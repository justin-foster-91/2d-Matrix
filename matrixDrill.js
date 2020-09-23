/*
Write an algorithm which searches through a 2D array, 
and whenever it finds a 0 should set the entire row and column to 0.

Input [
[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]
];

Output [
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]
];
*/

const input = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
  ];

// List => Boolean
const allOnes = (list) => {
  if (list.length === 0) return true;
  if (list[0] !== 1) return false;

  return allOnes(list.slice(1))
}

console.log(allOnes([1,1,1,1,1,1]), 'Test:', true);
console.log(allOnes([0,0,0,0,0,0]), 'Test:', false);
console.log(allOnes([1,1,1,0,1,1]), 'Test:', false);

// Matrix, Number => List
const getRow = (matrix, number) => {
  return matrix[number];
}

console.log(getRow(input, 2), 'Test:', [1,1,1,1,1]);
console.log(getRow(input, 0), 'Test:', [1,0,1,1,0]);

// Matrix, Number => List
const getCol = (matrix, number) => {
  return matrix.map((row) => {
    return row[number];
  })
}

console.log(getCol(input, 2), 'Test:', [1,1,1,1,1]);
console.log(getCol(input, 0), 'Test:', [1,0,1,1,1]);


// Matrix => Matrix
const twiddleMatrix = (inputMatrix) => {
  let outputMatrix = Array(inputMatrix.length).fill().map(() => Array(inputMatrix[0].length).fill(0));
  for (let row = 0; row < inputMatrix.length; row++) {
    for (let col = 0; col < inputMatrix[0].length; col++) {
      if (allOnes(getRow(inputMatrix, row)) && allOnes(getCol(inputMatrix, col))) {
        outputMatrix[row][col] = 1;
      }
    }
  }
  return outputMatrix;
}

console.log(twiddleMatrix(input), 'Test:', [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,1,1,0],
  [0,0,0,0,0],
  [0,0,1,1,0]
  ]);
console.log(twiddleMatrix([
  [0,1],
  [1,1]]), 'Test:', [
  [0,0],
  [0,1]]);