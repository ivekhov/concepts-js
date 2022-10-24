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
