import _ from 'lodash';

const findWhere =  (books, search) => {
// export default (books, search) => {
  const searchKeys = _.keys(search);
  for(const book of books) {
    const flags = searchKeys.reduce((acc, key) => {
      book[key] === search[key] ? acc.push(true) : acc.push(false);
      return acc;
    }, []);

    if (!flags.includes(false)) {
      return book;
    }
  };
  return null;
};

