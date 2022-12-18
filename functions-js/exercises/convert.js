/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив
определённой структуры и возвращает объект, полученный из этого массива.

Массив устроен таким образом, что с помощью него можно представлять ассоциативные массивы.
Каждое значение внутри него — это массив из двух элементов, где первый элемент — ключ,
а второй — значение. В свою очередь, если значение тоже является массивом, то считается,
что это вложенное представление ассоциативного массива. Другими словами, любой массив
внутри исходного массива всегда рассматривается как данные, которые нужно конвертировать в объект.

convert([]); // {}
convert([['key', 'value']]); // { key: 'value' }
convert([['key', 'value'], ['key2', 'value2']]); // { key: 'value', key2: 'value2' }

convert([
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2']
]);
// { key: { key2: 'anotherValue' }, key2: 'value2' }
 */

const data = [['key', 'value']];
const data2 = [['key', 'value'], ['key2', 'value2']];
const data3 = [
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2']
];

const convert = (items) => {
  // accumulator
  const accumulator = {};
  
  // crawler
  const crawler = (nodes, storage) => {
    nodes.reduce((acc, item) => {
      if (!Array.isArray(item[1])) {
        acc[item[0]] = item[1];
      } else {
        acc[item[0]] = {};
        crawler(item[1], acc[item[0]]);
      }
      return acc;
    }, storage);
  };
  crawler(items, accumulator);
  return accumulator;
};


// console.log(convert([]));
// console.log(convert(data2));
console.log(convert(data3));

/*
const convert = (tree) => tree.reduce((acc, node) => {
  const [key, value] = node;
  const newValue = Array.isArray(value) ? convert(value) : value;
  return { ...acc, [key]: newValue };
}, {});
*/
