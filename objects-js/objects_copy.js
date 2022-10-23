import _ from 'lodash';
// cloning objects task # 10

const data = {
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

  // let current = data;
  const entries = Object.entries(data);

  // обход на 1 уровне
  for (const [key, value] of entries) {
    // проверка вложенности
    if (_.isObject(value) ) {
      // рекурсивный вызов
      result[key] = cloneDeep(value);
    } else {
      // не рекурсивный вызов
      result[key] = value;
    }
  }

  return result;
};

// BEGIN
// const cloneDeep = (object) => {
//   const result = {};

//   const entries = Object.entries(object);

//   for (const [key, value] of entries) {
//     result[key] = _.isObject(value) ? cloneDeep(value) : value;
//   }

//   return result;
// };

// export default cloneDeep;
// END

//----
console.log(JSON.stringify(data));

const result = cloneDeep(data);
console.log(JSON.stringify(result));
console.log('----');
console.log(JSON.stringify(data.key2));
console.log(JSON.stringify(result.key2));


// Но внутри другие объекты
console.log(result.key2 !== data.key2);
