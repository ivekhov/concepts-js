const convert = (items) => {
  // accumulator
  const accumulator = {};
  
  // crawler
  const crawler = (nodes, storage) => {
    nodes.reduce((acc, item) => {
      if (!Array.isArray(item[1])) {
        acc[item[0]] = item[1];
      } else {
        acc[item[0]] = {};
        crawler(item[1], acc[item[0]]);
      }
      return acc;
    }, storage);
  };
  crawler(items, accumulator);
  return accumulator;
};


/*
const convert = (tree) => tree.reduce((acc, node) => {
  const [key, value] = node;
  const newValue = Array.isArray(value) ? convert(value) : value;
  return { ...acc, [key]: newValue };
}, {});
*/
