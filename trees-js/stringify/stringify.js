// https://ru.hexlet.io/challenges/js_trees_stringify_exercise

import _ from "lodash";
import * as Console from "console";

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
  if (!_.isObject(value)) {
    return `${value}`
  };
  let result = '';
  let multiplicator = 0; // 0
  let temp = 1;
  const crawler = (item, accumulator) => {
    multiplicator += 1;
    accumulator += '{\n';
    const entries = Object.entries(item);
    for (const [keyInternal, valueInternal] of entries) {
      if (_.isObject(valueInternal)) {
        if (valueInternal !== null ) {
          accumulator += `${replacer.repeat(spacesCount * multiplicator)}${keyInternal}: ${crawler(valueInternal, '')}\n}`;
          multiplicator += 1;
          console.log(multiplicator);
          // multiplicator -= 1;
          return accumulator;
        }
      };
      accumulator += `${replacer.repeat(spacesCount * multiplicator)}${keyInternal}: ${valueInternal}\n`;
    };
    multiplicator -= 1;
    accumulator += `${replacer.repeat(spacesCount * multiplicator)}}`;
    return accumulator;
  }
  result += crawler(value, result);
  return result;
};

const data2 = {
  hello: 'world',
  is: true,
  nested: {
    count: 5
  }
};
console.log(stringify(data4, '|-', 2));

// console.log(
  // stringify(data4),
// );

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
