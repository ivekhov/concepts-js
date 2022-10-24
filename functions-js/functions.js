// task #01
const isPrime = (number) => {
  if (number <= 1) return false;

  let counter = 2;
  while (counter < number) {
    if (number % counter === 0) return false;
    counter += 1;
  }
  return true;
}

const sayPrimeOrNot = (number) => (isPrime(number)) ? console.log('yes') : console.log('no');

// example
// BEGIN
// const isPrime = (num) => {
//   if (num < 2) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };

// const sayPrimeOrNot = (num) => {
//   const text = isPrime(num) ? 'yes' : 'no';
//   console.log(text);
// };

// export default sayPrimeOrNot;
// END

// # 04 rest operator
const average = (...values) => {
  const result = (values.length !== 0) ? (_.sum(values) / values.length) : null;
  return result;
};

// # 05 spread operator 
const convert = (...dates) => {

  if (dates.length === 0) return []; // could be omitted  as below are checked zero length
  const datesArray = [];

  for (const item of dates) {

    const date = new Date(item[0], item[1] , item[2]); // const date = new Date(...item);
    datesArray.push(date.toDateString());
  }
  return datesArray;
};

// # 06 internal functions

const run = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (text, count) => {
    if (text.length < count) return null;
    let result = '';
    
    let counter = 0;
    let lenText = text.length - 1;
    while (counter < count) {

      result += text[lenText];

      counter += 1;
      lenText -= 1;
    }
    return result;
  }

  // END

  return takeLast(text, 4);
};

// example
// const takeLast = (str, length) => {
//   if (str.length === 0 || str.length < length) {
//     return null;
//   }

//   const result = [];
//   for (let i = str.length - 1; result.length < length; i -= 1) {
//     result.push(str[i]);
//   }

//   return result.join('');
// };


// # 07 
const takeOldest = (users, count = 1) => {
  // функция сравнения 

  users.sort((a,b) => {
    if (Date.parse(a.birthday) === Date.parse(b.birthday)) {
      return 0;
    }

    return Date.parse(a.birthday) > Date.parse(b.birthday) ? 1 : -1;
  });

  return users.slice(0, count);


  // вызов сортировки массива с функцией сравнения и взятие 1 объекта после сортировки
};

// const takeOldest = (users, count = 1) => {
//   const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
//   return sorted.slice(0, count);
// };

// # 08 map function task

const getChildren = (users) => {

  const result = users.map(
    (user) => user.children
  );

  return result.flat();
};

// BEGIN
// const getChildren = (users) => {
//   const childrenOfUsers = users.map(({ children }) => children);
//   return childrenOfUsers.flat();
// };

// Alternative solution using flatMap
// export default (users) => users.flatMap(({ children }) => children);
// END

// # 09 filter
const getGirlFriends = (users) => {
  const selected = users.map(({friends}) => friends);
  return selected.flat().filter(({ gender }) => gender === 'female');
};

// #10 reduce
const groupBy = (students, property) => {
  const select = (acc, user) => {
    if (!Object.hasOwn(acc, user[property])) {
      acc[user[property]] = [];
    }
    acc[user[property]].push(user);
    return acc;
  };

  return students.reduce(select, {});
};

// BEGIN
const groupBy2 = (objects, key) => objects.reduce((acc, object) => {
  // из каждого объекта берётся значение по ключу
  const groupName = object[key];
  // контейнером группы выступает массив
  // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
  const group = acc[groupName] ?? [];
  // возвращается новый объект аккумулятора
  // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
  // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
  return { ...acc, [groupName]: group.concat(object) };
}, {});

// #11 
const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});
 
// # 12 Recursion
const sequenceSum = (begin, end) => {
  if (begin > end) return NaN;
  if (begin === end ) return end;
  return (begin + sequenceSum(begin + 1, end));
}; 

// # 11 recursion

const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  if (num === 1) return 1;
  const iter = (number, dividor) => {
    if (number === dividor) return dividor;
    if (number % dividor === 0) return dividor;
    return iter(number, dividor + 1)
  }
  return iter(num, 2);
  // END
};

const iter = (acc) => {
  // We use 'num / 2' in the condition below, and not 'num'.
  // This is a simple optimization: a number cannot be divided
  // by a number larger than its half.
  if (acc > num / 2) {
    return num;
  }
  if (num % acc === 0) {
    return acc;
  }
  return iter(acc + 1);
};

return iter(2);

