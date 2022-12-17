const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];
 
// Реализуйте и экспортируйте по умолчанию функцию, которая 
// принимает список пользователей и возвращает объект, 
// где ключ - это год рождения, а значение - это количество мужчин, 
// родившихся в этот год.



const getMenCountByYear = (users) => {

  const inner = users.reduce(
    // inner walk per items
    (acc, user) => {
      if (user.gender === 'male') {
        const yearOfBirth = user['birthday'].slice(0, 4);
        if (acc.hasOwnProperty(yearOfBirth)) {
          acc[yearOfBirth] += 1;
        } else {
          acc[yearOfBirth] = 1;
        }
      }
      return acc;
    }, 
    {}
  );
  
  return inner;
};

// console.log(
//   getMenCountByYear(users)
// )

// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };

import _ from 'lodash';

// BEGIN
const getMenCountByYear2 = (users) => {
  const men = users.filter(({ gender }) => gender === 'male');

  const years = men.map(({ birthday }) => birthday.slice(0, 4));
  // console.log(years); 

  return years.reduce((acc, year) => {
    const count = _.get(acc, year, 0) + 1;
    console.log(count);

    return { ...acc, [year]: count };
  }, {});
};

export default getMenCountByYear;
// END



console.log(
  getMenCountByYear2(users)
)