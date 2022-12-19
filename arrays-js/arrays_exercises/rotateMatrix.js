/*
https://ru.hexlet.io/challenges/js_arrays_matrix_rotation_exercise
Реализуйте и экспортируйте функции rotateLeft() и rotateRight(), которые поворачивают матрицу влево
(против часовой стрелки) и соответственно вправо (по часовой стрелке).

Матрица реализована на массивах.
Функции должны возвращать новую матрицу не изменяя исходную.
Примеры:
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];



rotateLeft(matrix);
// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]

rotateRight(matrix);
// [
//   [9, 5, 1],
//   [0, 6, 2],
//   [1, 7, 3],
//   [2, 8, 4],
// ]

 */
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

const rotateRight = (matrix) => {
  const widthOld = matrix[0].length; // 4
  const heightOld = matrix.length;   // 3
  const newM = [];
  for (let i = 1; i <= widthOld; i++ ) { // 4
    newM.push([]);
  } // 4
  
  for (let row = 0, oldRow = 0;  row < widthOld;  row += 1, oldRow += 1) {      // 4
    for (let col = 0,  oldCol = heightOld - 1; col < heightOld; col += 1, oldCol -= 1) {  // 3
      newM[row][col] = matrix[oldCol][oldRow];
    }
  }
  return newM;
};

const rotateLeft = (matrix) => {
  const widthOld = matrix[0].length; // 4
  const heightOld = matrix.length;   // 3
  const newM = [];
  for (let i = 1; i <= widthOld; i++ ) { // 4
    newM.push([]);
  } // 4
  
  for (let row = 0, oldRow = widthOld - 1;  row < widthOld;  row += 1, oldRow -= 1) {      // 4
    for (let col = 0,  oldCol = 0; col < heightOld; col += 1, oldCol += 1) {  // 3
      newM[row][col] = matrix[oldCol][oldRow];
    }
  }
  return newM;
};

export { rotateLeft, rotateRight };

console.log(
  rotateLeft(matrix),
  rotateRight(matrix),
)
