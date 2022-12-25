/*
https://ru.hexlet.io/challenges/intro_to_programming_rna_exercise
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

/* рекурсивное решение - псевдокод

dnaToRna(row)
- guard expression
- create dict for matching
- const arr = row.split('');
- result = []

inner(arr)
{
- снимать через рор() - пока результат не undefined (терминальный случай - он же базовый случай )
const item = arr.pop();
if (arr.length === 1 ) { return item } ;

- Фильтр - если элемент не входит в образец - вернуть налл 
if (item not in keys of dict) { return null } ;

- 
return result.push(inner(arr));

}
return inner(arr).join('');

*/
// https://ru.hexlet.io/challenges/intro_to_programming_rna_exercise
const dnaToRnaRecursive = (row) => {
  if (row.length < 1) return '';

  const items = row.split('');
  const nuclDna = ['A', 'C', 'G', 'T'];
  const nuclRna = ['U', 'G', 'C', 'A'];
  const dict = {};
  nuclDna.forEach((k, i) => {dict[k] = nuclRna[i]});

  const inner = (arr) => {
    const item = arr.pop();

    if (!nuclDna.includes(item)) {
      // вот тут хочу настроить чтобы функция вообще отдавала только null, типа как будто break
      // а в текущей версии null передается как часть строки
      return null;
    }

    if (arr.length === 0 ) return dict[item];
    return `${inner(arr)}${dict[item]}`;
  };
  return inner(items);
}

console.log(
  dnaToRnaRecursive('ACGTGGTCTTAA'), // 'UGCACCAGAAUU'
  dnaToRnaRecursive('CCGTA'), // 'GGCAU'
  dnaToRnaRecursive(''), // ''
  dnaToRnaRecursive('ACNTG'), // null
);

console.log(
  dnaToRna('ACGTGGTCTTAA'), // 'UGCACCAGAAUU'
  dnaToRna('CCGTA'), // 'GGCAU'
  dnaToRna(''), // ''
  dnaToRna('ACNTG'), // null
);