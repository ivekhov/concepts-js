
const compose = (f1, f2) => ( arg ) => f1(f2(arg));



const concat = (a) => (b) => (c) => a + b + c; 

// concat('a')('bc')('f'); // abcf


