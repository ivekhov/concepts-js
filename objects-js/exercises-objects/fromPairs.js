
const fromPairs = (items) => Object.fromEntries(items);


console.log(
  
  fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]),
  // { 'cat': 11, 'dog': 6 }

  fromPairs([['fred', 30], ['barney', 40]]),
  // { 'fred': 30, 'barney': 40 }
)
