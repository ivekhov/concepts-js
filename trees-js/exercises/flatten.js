const flatten = (tree) => {
  const result = [];
  const crawler = (item, accumulator) => {
    for (const element of item) {
      if (!Array.isArray(element)) {
        accumulator.push(element);
      }
      else {
        crawler(element, accumulator);
      }
    }
    return accumulator;
  };
  crawler(tree, result);
  return result;
};
  // ToDo: реализовать не циклом, а функциями map / reduce 
//-----------------
// test
const list = [1, 2, [3, 5], [[4, 3], 2]];
console.log(flatten(list));
