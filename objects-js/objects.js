
import _ from 'lodash';

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


// # 11 Spread my solution
const make = (companyName, properties) => {
  return {
    'name': companyName,
    'state': 'moderating',
    'createdAt': Date.now(),
    ...properties, 
  };
  
}

// BEGIN
// export default (name, data = {}) => {
//   const defaultData = {
//     state: 'moderating',
//     createdAt: Date.now(),
//   };

//   return { ...defaultData, ...data, name };
// };
// END


// # 12 


const getSortedNames = (users) => {
    const result = [];
  
    for (const user of users) {
      const { name: name } = user;
      result.push(user.name);
    }
  
    result.sort();
    return result;
  }


// BEGIN
// export default (users) => {
//   const names = [];

//   for (const { name } of users) {
//     names.push(name);
//   }

//   return names.sort();
// };
// END

// 

Основы JS 
массивы JS 
командн строка 
гит введение
настройка окружения JS 
