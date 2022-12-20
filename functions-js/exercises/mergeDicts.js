/*
Реализуйте и экспортируйте по умолчанию функцию, которая объединяет
несколько словарей (объектов) в один общий словарь.
Функция принимает любое количество аргументов и возвращает результат в виде объекта,
в котором каждый ключ содержит список уникальных значений в виде массива.
Элементы в списке располагаются в том порядке, в котором они появляются во входящих словарях.

Примеры работы:

merge({}, {}, {});
// {}


merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 },
  );
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }

merge({ a: 1, b: 2 }, { a: 3 });
// { a: [1, 3], b: [2] }

 */

const merge = (...params) => {
  
  return params
    .reduce((acc, item) => {
      const entries = Object.entries(item);
      for (const [key, value] of entries) {
        if (Object.hasOwn(acc, key)) {
          if (! acc[key].includes(value)) {
            acc[key].push(value);
          }
        } else {
          acc[key] = [];
          acc[key].push(value);
        }
      }
      return acc;
    }, {})
}

console.log(
  // merge({ a: 1, b: 2 }, { a: 3 }),
  merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 },
  ),
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }
  
  merge({}, {}, {})
  
  
)

/*

// BEGIN
const cons = (list, el) => _.union(list, [el]);

export default (...dictionaries) => _.mergeWith({}, ...dictionaries, cons);

// Документация по функции union https://lodash.com/docs/#union
// Документация по функции mergeWith: https://lodash.com/docs/#mergeWith
/*
Функция merge в lodash объединяет объекты:
_.merge({ a: 'b', c: 'b' }, { b: 'c', c: 'd' }) // { a: "b", c: "d", b: "c" }
Последний объект считается источником (source) актуальных значений,
поэтому в результате ключ "c" перезаписан значением из объекта справа

mergeWith делает то же самое, но принимает третьим аргументом функцию-обработчик (customizer)
customizer должен вернуть значение для текущего ключа (ключи берутся из правого объекта)
customizer принимает до 6 аргументов, но нас интересуют только два:
* objValue - значение по текущему ключу из левого объекта
* srcValue - значение по текущем ключу из правого объекта
_.mergeWith({ a: 'b', c: 'b' }, { b: 'c', c: 'd' }, (objValue, srcValue) => {
  return srcValue || objValue;
}) // { a: "b", c: "d", b: "c" }

Возвращая из customizer массив, в objValue в следующий раз будет возвращаться массив,
что и делается в решении учителя:
_.mergeWith({ a: 'b', c: 'b' }, { b: 'c', c: 'd' }, (objValue, srcValue) => {
  return _.union(objValue, [srcValue]); // objValue будет массивом для значений из source
}) // { a: "b", c: ["d"], b: ["c"] }

cons выступает функцией-обёрткой для union и как customizer для mergeWith
*/
