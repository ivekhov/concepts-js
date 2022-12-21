import _ from 'lodash';

const rollDie = () => _.random(1, 6);

const play = (numbers, rollDie) => {
  const result = {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
  }
  for (let i = 0; i < numbers; i += 1) {
    result[`${rollDie()}`].push('#');
  }
  
  const entries = Object.entries(result);
  const items = [];
  
  for (const [key, val] of entries) {
    let count = '';
    val.length === 0 ? count = '' : count = ` ${val.length}`
    items.push(`${key}|${val.join('')}${count}`);
  }
  return items.join('\n');
};

console.log(play(10, rollDie));


/*
// BEGIN
export default (roundsCount, rollDie) => {
  const bar = '#';
  const numbers = _.times(roundsCount, rollDie);
  const sides = _.range(1, 7);

  const lines = sides.map((side) => {
    const count = numbers.filter((number) => number === side).length;
    const displayCount = count !== 0 ? ` ${count}` : '';
    return `${side}|${bar.repeat(count)}${displayCount}`;
  });
  const str = lines.join('\n');

  console.log(str);
};
// END
 */
