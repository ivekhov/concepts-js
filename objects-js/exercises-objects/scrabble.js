import _ from 'lodash';

// BEGIN (write your solution here)

export default (symbols, word) => {
  if (symbols.length === 0) return false;
  const wordDict = _.countBy(word.toLowerCase());
  // console.log(wordDict);
  const symbolsDict = _.countBy(symbols.toLowerCase());
  // console.log(symbolsDict);

  const entries = Object.entries(wordDict);
  for (const [k, v] of entries) {
    // console.log( v, symbolsDict[k]);
    if (v > symbolsDict[k] || !symbolsDict.hasOwnProperty( k)) {
      return false;
    }
  }
  return true;

};


