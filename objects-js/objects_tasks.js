// tasks

// BEGIN (write your solution here)

const countWords = (text) => {
  let wordsArray = _.words(text.toLowerCase())
  const result = {};

  for (const item of wordsArray) {
    result[item] = (result[item] ?? 0) + 1;
  }

  return result;

};

const pick_ex = (data, keys) => {
    const result = {};
  
    for (const key of keys) {
      if (Object.hasOwn(data, key)) {
        result[key] = data[key];
      }
    }
  
    return result;
  };
//----

  // tasks # 08

// my version
const pick = (data, properties) => {

    const result = {};
    const entries = Object.entries(data);
    for (const [key, value] of entries) {
  
      if (properties.includes(key)) {
        result[key] = value;
      }
  
    }
  
    return result;
  };

// Обход к глубину по списку ключей без спец операторов  нулевого слияния и 
// опциональной последовательности

// BEGIN
export default (data, keys) => {
    // копия входных данных
    let current = data;

    // обход ключей
    for (const key of keys) {

      // проверка наличия значения по ключу
      const hasProperty = Object.hasOwn(current, key);
      
      // если нет значения, то вернуть ничего
      if (!hasProperty) {
        return null;
      }
      // если есть значение, то вписать значение по ключу
      current = current[key];
    }
  
    return current;
  };
  // END

// merge objects task # 09

import _ from 'lodash';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

const fill = (data, keys, update) => {
  if (keys.length === 0) {
    return Object.assign(data, update);
  }
  const dataSelected = _.pick(data, keys);
  const updateSelected = _.pick(update, keys);
  const updatedData = Object.assign(dataSelected, updateSelected);
  return Object.assign(data, updatedData);
};

// console.log(fill(company, ['name'], data));

// BEGIN - example solution
const fill_ex = (object, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(object, filteredData);
};
// END


// cloning objects task # 10

const data2 = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// solution
const cloneDeep = (data) => {
  const result = {};

  let current = data;
  const entries = Object.entries(current);

  // обход на 1 уровне
  for (const [key, value] of entries) {
    // проверка вложенности
    if (_.isObject(value) ) {
      // рекурсивный вызов

      cloneDeep(value);
      // cloneDeep(Object.assign({}, value));
    } else {
      // не рекурсивный вызов
      result[key] = value;

    }
  }

  return result;
}
//Для рекурсивного запуска понадобится имя для функции
// _.isObject()
// Object.entries()

// result имеет такую же структуру, как и data



console.log(JSON.stringify(data2));

const result = cloneDeep(data2);
console.log(JSON.stringify(result));
console.log('----');
console.log(JSON.stringify(data2.key2));
console.log(JSON.stringify(result.key2));


// Но внутри другие объекты
console.log(result.key2 !== data2.key2);

// console.log( 
//   result.key2 !== data2.key2; // true
//   result.key2.innerKey !== data.key2.innerKey // true
// )