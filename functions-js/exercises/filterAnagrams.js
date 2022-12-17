import _ from 'lodash';

const filterAnagrams = (pattern, words) => {

  // filter the same length
  return words
    .filter((word) => (word.length === pattern.length) && (_.isEqual(new Set(word), new Set(pattern)) ));

  // create set
  return filtered;
};










console.log(
  filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']),
  // ['aabb', 'bbaa']
  
  filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']),
  // ['carer', 'racer']
  
  filterAnagrams('laser', ['lazing', 'lazy',  'lacer']),
// []
)

//
// BEGIN
export default (word, words) => {
  const normalize = (str) => str.split('').sort().join('');
  const normal = normalize(word);

  return words.filter((item) => normalize(item) === normal);
};
// END
