/*
https://ru.hexlet.io/challenges/intro_to_programming_sum_square_difference_exercise
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference(), которая принимает аргумент n и возвращает 
разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
*/

// const sumSquareDifference = (n) => {
/*
- вычислить по очереди два числа
    квадрат суммы

    написать внутр функцию sqSums() и вызвать ее рекурсивно 
    const squareOfSums = (num) => {
        if (num === 1) return 1;

        return (num + squareOfSums)(num - 1)) ** 2;
    }


    сумму квадратов sumOfSquares()



- вычесть одного из другого и вернуть

*/


const sumOfSquares = (num) => num === 1 ? 1 : sumOfSquares(num - 1) + num ** 2;

const squareOfSums = (num) => num === 1 ? 1 : num  + squareOfSums(num - 1); 

const sumSquareDifference = (n) => squareOfSums(n) ** 2 - sumOfSquares(n);


console.log(
    squareOfSums(10),
    sumOfSquares(10),
);
console.log(sumSquareDifference(10)); // 2640