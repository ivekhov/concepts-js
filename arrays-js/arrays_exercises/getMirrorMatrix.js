/*
arrays.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный массив (матрицу)
и возвращает массив, изменённый таким образом, что правая половина матрицы становится
зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы.

Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество столбцов
всегда равно количеству строк.

Примеры
getMirrorMatrix([
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
]);

//  [
//     [11, 12, 12, 11],
//     [21, 22, 22, 21],
//     [31, 32, 32, 31],
//     [41, 42, 42, 41],
//  ]
 */

const getMirrorMatrix = (matrix) => {
  const mid = matrix[0].length / 2;
  const cnt = matrix[0].length / 2;
  const newM = [...matrix]
  const length = matrix.length;
  const width = matrix[0].length;
  
  for (let row = 0; row < length; row += 1) {
    for (let col = mid, temp = mid - 1; col < width; col += 1, temp -= 1) {
      newM[row][col] = matrix[row][temp];
    }
  }
  return newM;
};

const data = [
  [11, 12, 13, 14],
  [21, 22, 23, 24],
  [31, 32, 33, 34],
  [41, 42, 43, 44],
]
console.log(
  getMirrorMatrix(data),
)

/*
// BEGIN
const getMirrorArray = (array) => {
  const size = array.length;
  const mirrored = [];

  for (let i = 0; i < size / 2; i += 1) {
    mirrored[i] = array[i];
    mirrored[size - i - 1] = array[i];
  }

  return mirrored;
};

const getMirrorMatrix = (matrix) => {
  const mirroredMatrix = [];

  for (const row of matrix) {
    const mirroredRow = getMirrorArray(row);
    mirroredMatrix.push(mirroredRow);
  }

  return mirroredMatrix;
};

export default getMirrorMatrix;
// END
 */
