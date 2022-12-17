// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход 
// массив чисел и искомое число. Задача функции — найти в массиве ближайшее 
// число к искомому и вернуть его индекс в массиве.

// Если в массиве содержится несколько чисел, одновременно являющихся ближайшими 
// к искомому числу, то возвращается наименьший из индексов ближайших чисел.

// Примеры

const findIndexOfNearest = (nums, target) => {
  if (nums.length === 0) {
    return null;
  }

  // reduce
  // create obj with distance and const with minimal distance

  // or
  // map abs delta

  const deltas = nums.map((item) => Math.abs(item - target));
  const localMin = Math.min(...deltas);
  return deltas.indexOf(localMin)
};



console.log(
  // findIndexOfNearest([], 2),             // null
  findIndexOfNearest([15, 10, 3, 4], 0),   // 2
  findIndexOfNearest([7, 5, 3, 2], 4),     // 1
  findIndexOfNearest([7, 5, 4, 4, 3], 4),  // 2
);


//
// BEGIN
export default (numbers, num) => {
  if (numbers.length === 0) {
    return null;
  }

  const diffs = numbers.map((element) => Math.abs(num - element));

  return diffs.reduce((index, diff, currentIndex) => (
    diff < diffs[index] ? currentIndex : index
  ), 0);
};
// END