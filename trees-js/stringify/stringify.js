// https://ru.hexlet.io/challenges/js_trees_stringify_exercise

// import { entries } from "lodash";

// ключи и строковые значения должны быть без кавычек;
// строчка (линия) в строке заканчивается самим значением, без запятой.
// Не используйте в своём решении саму функцию JSON.stringify().

// Синтаксис:

// stringify(value[, replacer[, spacesCount]])
// Параметры:

// value
// Значение, преобразуемое в строку.
// replacer, необязательный
// Строка - отступ для ключа; Значение по умолчанию - один пробел.
// spacesCount, необязательный
// Число - количество повторов отступа ключа. Значение по умолчанию - 1.

const data = { hello: 'world', is: true, number: 5, float: 1.25};
const data2 = { hello: 'world', is: true, nested: { count: 5 } };
const data3 = { nested: { count: 5 } };

const data4 = {
  string: 'value',
  boolean: true,
  number: 5,
  float: 1.25,
  object: {
    5: 'number',
    1.25: 'float',
    null: 'null',
    true: 'boolean',
    value: 'string',
    nested: {
      boolean: true,
      float: 1.25,
      string: 'value',
      number: 5,
      null: null,
    },
  },
};


// ToDo: accumulator

const stringify = (value,  replacer = ' ', spacesCount = 1) => {
  if (typeof value !== 'object') {
    return `${value}`
  };
  // console.log(value);

  let result = '';

  const crawler = (item, accumulator) => {
    accumulator += '{\n';
    const entries = Object.entries(item);

    console.log(entries);

    for (const [keyInternal, valueInternal] of entries) {
      if (typeof valueInternal === 'object') {
        // console.log(`!-${valueInternal}-!`);
        crawler(valueInternal, accumulator);
      }
      accumulator += `${replacer.repeat(spacesCount)}${keyInternal}: ${valueInternal}\n`;
    };
    accumulator += '}';
    return accumulator;
  }
  result += crawler(value, result);
  return result;
};

// console.log(
//   stringify('hello'), // hello - значение приведено к строке, но не имеет кавычек
//   stringify(true),    // true
//   stringify(5),
//   stringify(1.25)
// );

console.log(
  stringify(data2),
);
console.log(
  // stringify(data3),
);

// console.log(
//   stringify(data3, '----', 4),
// );

 
// stringify(data, '|-', 2);
// Символ, переданный вторым аргументом повторяется столько раз, сколько указано третьим аргументом.
// {
// |-|-hello: world
// |-|-is: true
// |-|-nested: {
// |-|-|-|-count: 5
// |-|-}
// }
