/*
Операция умножения двух матриц А и В представляет собой вычисление результирующей матрицы С,
где каждый элемент C(ij) равен сумме произведений элементов в соответствующей строке первой матрицы A(ik) и
элементов в столбце второй матрицы B(kj).

Две матрицы можно перемножать только в том случае, если количество столбцов в первой матрице совпадает
с количеством строк во второй матрице. Это значит, что первая матрица обязательно должна быть
согласованной со второй матрицей. В результате операции умножения матрицы размера M×N на матрицу
размером N×K является матрица размером M×K.

Реализуйте и экспортируйте по умолчанию функцию, которая принимает две матрицы и возвращает новую матрицу —
результат их произведения.
 */

const matrixC = [
  [2, 5],
  [6, 7],
  [1, 8],
];
const matrixD = [
  [1, 2, 1],
  [0, 1, 0],
];
const matrixA = [
  [1, 2],
  [3, 2]
];
const matrixB = [
  [3, 2],
  [1, 1]
];
const multiply = (matrixA, matrixB) => {
  const heightA = matrixA.length;
  const widthA = matrixA[0].length;
  const heightB = matrixB.length;
  const widthB = matrixB[0].length;
  const newM = [];
  for (let rowA = 0; rowA < heightA; rowA += 1) {
    const res = [];
    let temp = 0;
    
    // ToDo
    // for (let colA = 0; colA < widthB; colA += 1) {
    //   temp += matrixA[rowA][colA] * matrixB[rowB][colB];
    //   res.push(temp);
    // }
    newM.push(res);
  }
  return newM;
};
console.log(
  multiply(matrixC, matrixD),
  // [
  //   [2, 9, 2],
  //   [6, 19, 6],
  //   [1, 10, 1],
  // ]
  // multiply(matrixA, matrixB),
  // [
  //  [5, 4],
  //  [11, 8]
  //  ]

)
