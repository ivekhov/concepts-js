/*
Реализуйте и экспортируйте по умолчанию функцию,
которая сравнивает переданные версии version1 и version2.
Если version1 > version2, то функция должна вернуть 1,
если version1 < version2, то - -1, если же version1 === version2, то - 0.

Версия - это строка, в которой два числа (мажорная и минорные версии)
разделены точкой, например: 12.11. Важно понимать, что версия - это не число с плавающей точкой,
а несколько чисел не связанных между собой. Проверка на больше/меньше производится
сравнением каждого числа независимо. Поэтому версия 0.12 больше версии 0.2.

Пример порядка версий:

0.1 < 1.1 < 1.2 < 1.11 < 13.37
Примеры
compareVersion("0.1", "0.2"); // -1

compareVersion("0.2", "0.1"); // 1

compareVersion("4.2", "4.2"); // 0
 */

const compareVersion = (ver1, ver2) => {
  
  if (ver1 === ver2) return 0;
  
  const data1Int = ver1
    .split('.')
    .map(Number);
  
  const data2Int = ver2
    .split('.')
    .map(Number)
  
  let flag = 0;
  for (let ind = data1Int.length - 1; ind > -1 ; ind -= 1) {
    if (data1Int[ind] > data2Int[ind]) {
      flag = 1;
    } else if (data1Int[ind] < data2Int[ind]) {
      flag = -1;
    }
  }
  return flag;
};

console.log(
  compareVersion("0.1", "0.2"), // -1
  compareVersion("0.2", "0.1"), // 1
  compareVersion("4.2", "4.2"), // 0
  compareVersion("3.2", "2.12"), // 1
)

// const data1 = [ ...ver1.split('.') ];
// const data2 = [ ...ver2.split('.') ];
// const data1Int = data1.map(Number);
// const data2Int = data2.map(Number);

// [0, 2] [0, 12]
// for (const item of data1Int) {
//   if
// };

// const [x, y] =

// const data = [data1Int, data2Int];
// let flag = 0;
// for (const [x, y] of data) {
//   console.log([x, y]);
//   x > y ? flag = 1 : flag = -1;
// }
// return flag;

// return data1Int > data2Int ? 1 : -1;

/*
const compareVersion = (first, second) => {
  const [a1, b1] = first.split('.');
  const [a2, b2] = second.split('.');

  const major = Math.sign(a1 - a2);
  const minor = Math.sign(b1 - b2);

  return major === 0 ? minor : major;
};
 */
