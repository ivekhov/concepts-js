/*
ДНК и РНК это последовательности нуклеотидов.
Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

G -> C
C -> G
T -> A
A -> U
dnaToRna.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и
возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка),
то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый"
нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
 */

const dnaToRna = (dna) => {
  if (dna.length < 1) return '';
  const nuclDna = ['A', 'C', 'G', 'T'];
  const nuclRna = ['U', 'G', 'C', 'A'];
  const dict = {};
  nuclDna.forEach((k, i) => {dict[k] = nuclRna[i]});
  
  let flag = true;
  const result = dna
    .split('')
    .reduce((acc, item) => {
      if (nuclDna.includes(item)) {
        acc.push(dict[item]);
      } else {
        flag = false;
      }
      return acc;
    }, []);
  
  return flag === true ?  result.join('') : null;
};

console.log(
  dnaToRna('ACGTGGTCTTAA'), // 'UGCACCAGAAUU'
  dnaToRna('CCGTA'), // 'GGCAU'
  dnaToRna(''), // ''
  dnaToRna('ACNTG'), // null
)
