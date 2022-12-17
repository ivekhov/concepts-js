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

// const stringify = (value,  replacer = ' ', spacesCount = 2) => {
//   if (!_.isObject(value)) {
//     return `${value}`
//   };
//   let result = '';
//   const crawler = (item, accumulator, depth) => {
//     accumulator += '{\n';
//     const entries = Object.entries(item);
//     for (const [keyInternal, valueInternal] of entries) {
//       if (_.isObject(valueInternal)) {
//         if (valueInternal !== null ) {
//           accumulator += `${replacer.repeat(spacesCount * depth)}${keyInternal}: ${crawler(
//             valueInternal,
//             "",
//             depth + 1
//           )}\n${replacer.repeat(spacesCount * (depth - 1))}}`;
//           return accumulator;
//         }
//       };
//       accumulator += `${replacer.repeat(spacesCount * depth)}${keyInternal}: ${valueInternal}\n`;
//     };
//     accumulator += `${replacer.repeat(spacesCount * (depth - 1))}}`;
//     return accumulator;
//   }
//   result += crawler(value, result, 1);
//   return result;
// };

// const data2 = {
//   hello: 'world',
//   is: true,
//   nested: {
//     count: 5
//   }
// };
// console.log(stringify(data4));

//-------

// BEGIN
// import _ from 'lodash';

const stringify = (value, replacer = ' ', spacesCount = 1) => {

  const iter = (currentValue, depth) => {
    if (typeof currentValue !== 'object' || currentValue === null) {
      return `${currentValue}`;
    }
    
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => 
      `${currentIndent}${key}: ` +
      `${iter(val, depth + 1)}`);    
    // return [
    //   '{',
    //   ...lines,
    //   `${bracketIndent}}`,
    // ].join('\n');
    return lines;

  };  
  return iter(value, 1);
};

export default stringify;
// END
//-------


console.log(stringify(data4));


