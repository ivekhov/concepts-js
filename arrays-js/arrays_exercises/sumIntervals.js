/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив интервалов и
возвращает сумму всех длин интервалов. В данной задаче используются только интервалы
целых чисел от -100 до 100 , которые представлены в виде массива. Первое значение
интервала всегда будет меньше, чем второе значение. Например, длина интервала [-100, 0]
равна 100, а длина интервала [5, 5] равна 0. Пересекающиеся интервалы должны учитываться только один раз.

 */

import _ from 'lodash';

const findSeqs = (items) => {
    let start = items[0];
    let stop;
    let flag = false;
    const result = [];
    for (let idx = 1; idx < items.length; idx += 1) {
      if (items[idx] === items[idx - 1] + 1) {
        flag = true;
        stop = items[idx];
      } else {
        
        if (flag === true) {
          result.push([start, stop]);
          flag = false;
        }
        start = items[idx];
        
      }
    }
    if (flag === true) {
      result.push([start, stop]);
    }
  
  return result;
};

const sumIntervals = (items) => {
  let union = [];
  for (const item of items) {
    
    if (item[0] === item[1]) {
      let arr = _.range(item[0], item[1]  ); // +1
      union = _.union(union, arr);
      
    } else {
      let arr = _.range(item[0], item[1] ); // +1
      union = _.union(union, arr);
    }
  }
  
  const result = union.map((item) => Number(item));
  result.sort((a,b) => a-b);
  
  return result.length;
  
  //
  // const seqs = findSeqs(result);
  //
  // return seqs.reduce((acc, item) => {
  //   acc += item[1] - item[0];
  //   return acc;
  // }, 0);
};


console.log(
  sumIntervals([
    [7, 7],
    [6, 6]
    
    ]
  ),
  
  
  
  sumIntervals([
    [1, 5],
    [-30, 19],
    [1, 7],
    [16, 19],
    [5, 100]
  ]), // 130
  //
  sumIntervals([
    [1, 2],
    [11, 12]
  ]), // 2

  sumIntervals([
    [2, 7],
    [6, 6]
  ]), // 5
  sumIntervals([
    [1, 9],
    [7, 12],
    [3, 4]
  ]),
  
);

/*
// BEGIN

const sumIntervals = (intervals) => {
  const values = [];

  for (const [start, end] of intervals) {
    for (let i = start; i < end; i += 1) {
      if (!values.includes(i)) {
        values.push(i);
      }
    }
  }
  return values.length;
};

export default sumIntervals;
// END
 */
