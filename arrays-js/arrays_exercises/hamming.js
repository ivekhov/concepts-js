/*
Вес Хэмминга — это количество единиц в двоичном представлении числа.

solution.js

Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга.

Примеры
hammingWeight(0); // 0
hammingWeight(4); // 1
hammingWeight(101); // 4
Подсказки
Метод toString() может помочь перевести число в двоичную систему
 */
const hammingWeight = (number) => {
  
  return number
    .toString(2)
    .split('')
    .filter((digit) => digit === '1')
    .reduce((acc, item) => {
      acc += 1;
      return acc;
    }, 0)
};

console.log(
  hammingWeight(0),
  hammingWeight(4),
  hammingWeight(101)
);
