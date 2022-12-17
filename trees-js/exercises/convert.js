import _ from 'lodash';

const convert = (data) => {
  const result = {};

  const crawler = (items, accumulator) => {
    
    // ...
    for (const item of items) { 
      if (!Array.isArray(item[1])) {
        _.set(accumulator, [item[0]], item[1]);

      } else {
        // console.log(item[0]);
        // console.log(item[1]);
        crawler(item[1], accumulator[item[1]]);

        // _.set(accumulator, 
        //   item[0], 
        //   crawler(
        //     item[1],
        //     accumulator[item]
        //   )
        // );



        // crawler(
        //   item[1], 
        //   _.set(
        //     accumulator, 
        //     item[0],
        //     item[1]
        //   )
        // );

      }
    }
    
    return accumulator;
  };
  
  crawler(data, result);
  return result;
};

console.log(convert([
  ['key', [
            ['key2', 'anotherValue']
          ]
  ],
  ['key2', 'value2']
])); 
// { key: { key2: 'anotherValue' }, key2: 'value2' }

// console.log(convert([])); // 
// console.log(convert([['key', 'value']])); // { key: 'value' }
// console.log(convert([['key', 'value'], ['key2', 'value2']])); // { key: 'value', key2: 'value2' }
