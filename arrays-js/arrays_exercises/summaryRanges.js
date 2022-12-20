/*
Реализуйте и экспортируйте по умолчанию функцию, которая находит в массиве
непрерывные возрастающие последовательности чисел и возвращает массив с их перечислением.

Примеры
summaryRanges([]);
// []

summaryRanges([1]);
// []

summaryRanges([1, 2, 3]);
// ['1->3']

summaryRanges([0, 1, 2, 4, 5, 7]);
// ['0->2', '4->5']

summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]);
// ['110->112', '-5->-4']
 */

const summaryRanges = (items) => {
  if (items.length < 2) return [];
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
        result.push(`${start}->${stop}`);
        flag = false;
      }
      start = items[idx];
    
    }
  }
  if (flag === true) {
    result.push(`${start}->${stop}`);
  }
  return  result;
};


console.log(
  // summaryRanges([]),
  // []
  
  // summaryRanges([1]),
  // []
  
  summaryRanges([1, 2, 3]),
  // ['1->3']
  
  summaryRanges([0, 1, 2, 4, 5, 7]),
  // ['0->2', '4->5']
  
  summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]),
  // ['110->112', '-5->-4']
)




// const ___summaryRanges = (items) => {
//   if (items.length < 2) return [];
//
//   let start = 0;
//   let stop = 0;
//   const starts = []; // 1 2    110 111 -5
//   const stops = [];  // 2 3    111 112 -4
//   const result = [];
//
//   for (let index = 1; index < items.length; index += 1) {
//
//     if (items[index] === items[index - 1] + 1) {
//       start = items[index - 1];
//       stop = items[index];
//       starts.push(start);
//       stops.push(stop);
//     }
//   }
//   let tempStart = starts[0];
//   let tempStop = stops[0];
//
//   for (let index = 1; index < starts.length; index += 1) {
//     if (starts[index] === stops[index - 1]) {
//       tempStop = stops[index]
//     } else {
//       result.push(`${tempStart}->${tempStop}`);
//
//       // tempStart = starts[index + 1];
//       // tempStop = stops[index + 1];
//     }
//   }
//   result.push(`${tempStart}->${tempStop}`);
//
//
//   return  result;
// };


/*
// BEGIN
const getRangeOfSequence = (sequence) => {
  const first = sequence[0];
  const last = sequence[sequence.length - 1];
  return `${first}->${last}`;
};

const summaryRanges = (numbers) => {
  const ranges = [];
  let sequence = [];

  for (let index = 0; index < numbers.length; index += 1) {
    const current = numbers[index];
    const next = numbers[index + 1];
    sequence.push(current);
    if (current + 1 !== next) {
      if (sequence.length > 1) {
        const range = getRangeOfSequence(sequence);
        ranges.push(range);
      }
      sequence = [];
    }
  }

  return ranges;
};
 */
