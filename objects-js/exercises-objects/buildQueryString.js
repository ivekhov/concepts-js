

const bqs = (params) => {
  return Object // sortedParams =
    .keys(params)
    .sort()
    .reduce((acc, key) => {
      acc.push(`${key}=${params[key]}`);
      return acc;
    }, [])
    .join('&')
  
    // .reduce((acc, key) => {
    //   acc[key] = params[key];
    //   return acc;
    // }, {});
  
  // const entries = Object.entries(sortedParams);
  // const result = [];
  // for (const [k, v] of entries) {
  //   result.push(`${k}=${v}`);
  // }
  //
  // return result.join('&');
};


console.log(
  bqs({ per: 10, page: 1 }),
  // page=1&per=10
  bqs({ param: 'all', param1: true }),
  // param=all&param1=true
);

/*
// BEGIN
export default (params) => {
  const keys = Object.keys(params).sort();
  const result = [];

  for (const key of keys) {
    result.push(`${key}=${params[key]}`);
  }

  return result.join('&');
};
// END
 */
