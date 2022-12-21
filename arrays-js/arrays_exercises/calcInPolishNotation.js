const calcInPolishNotation = (items) => {
  const stack = []; // push pop
  const symbols = ['-', '+', '*', '/'];
  
  for (const item of items) {
    if (!symbols.includes(item)) {
      stack.push(item);
    } else {
      switch (item) {
        case '+':
          stack.push(stack.pop() + stack.pop());
          break;
        case '-':
          stack.push(-stack.pop() + stack.pop());
          break;
        case '*':
          stack.push(stack.pop() * stack.pop());
          break;
        case '/':
          let base = stack.pop();
          if (base === 0) return null;
          let delim = stack.pop();
          stack.push(delim / base);
          break;
      }
    }
  }
  return stack.pop();
};



console.log(
  calcInPolishNotation([1, 2, '+', 4, '*', 3, '+']), // 6 3 /
  calcInPolishNotation([7, 2, 3, '*', '-']), // 1
)

