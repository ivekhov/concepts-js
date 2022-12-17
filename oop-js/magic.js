// BEGIN
const f = (...numbers) => {
    const sum = numbers.reduce((acc, x) => (x + acc), 0);
    const inner = (...rest) => f(sum, ...rest);
    // функции - это объекты, что позволяет для "магического" метода установить свою функцию
    inner.valueOf = () => sum; // метод вызывается при сравнении, поэтому он возвращает только результат
    // подробнее о valueOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
    return inner;
};

// export default f;
// END
const magic = (...numbers) => {

    // here we get sum of numbers get
    const sum = numbers.reduce((accum, num) => (num + accum), 0);

    const inner = (...items) => magic(sum, ...items );

    inner.valueOf = () => sum;

    return inner;

}


console.log(
    f(), // == 0, // true
    f(5, 2, -8), // == -1, // true
    f(1, 2)(3, 4, 5)(6)(7, 10) , //== 38 // true
    magic(4, 8, 1, -1, -8)(3)(-3)(7, 2), // == 13; // true

);

