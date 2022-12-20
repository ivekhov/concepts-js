/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число,
которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из
чанков указанной размерности.

Примеры
chunk(['a', 'b', 'c', 'd'], 2);
// [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// [['a', 'b', 'c'], ['d']]

 */

const chunk = (arr, size) => {
  const iterations = Math.floor(arr.length / size) ;
  const residual = arr.length % size;
  
  const result = [];
  
  for (let i = 0; i < iterations; i += 1) {
    result.push(arr.slice(i * size, (i + 1) * size));
  }
  
  residual !== 0 ? result.push(arr.slice(iterations * size)) : undefined;
  
  return result;
};

console.log(
  chunk(['a', 'b', 'c', 'd'], 2),
  chunk(['a', 'b', 'c', 'd'], 3),
)

/*
// BEGIN
export default (arr, size) => {
  const nArr = [];
  for (let i = 0; i < arr.length; i += size) {
    nArr.push(arr.slice(i, i + size));
  }
  return nArr;
};
// END
 */
