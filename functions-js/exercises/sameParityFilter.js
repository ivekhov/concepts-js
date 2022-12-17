// Реализуйте и экспортируйте по умолчанию функцию, которая принимает 
// на вход массив и возвращает новый, 
// состоящий из элементов, у которых такая же чётность, 
// как и у первого элемента входного массива.

const sameParity = (items) => {
  
  // calc parity
  const temp = items.reduce((acc, item) => {
    const newAcc = acc + Math.round(item);
    return Math.abs(newAcc) % 2;
  }, 0);


  // filter
  return items.filter((item) => (Math.abs(item)) % 2  === temp);

};

console.log(
  sameParity([-1, 0, 1, -3, 10, -2]),  // [-1, 1, -3]
  sameParity([2, 0, 1, -3, 10, -2]), // [2, 0, 10, -2]
  sameParity([]), // []
  sameParity([10, -1.5, 1.3, -3, 25, -2]), // [10, -2]
);


// BEGIN
const isEven = (num) => num % 2 === 0;

export default (arr) => {
  const firstItemParity = isEven(arr[0]);
  return arr.filter((el) => isEven(el) === firstItemParity);
};
// END