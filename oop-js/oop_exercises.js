// # 01
// BEGIN
const bindLocal = (context, fn) => (...args) => fn.apply(context, args);

/*
Если разложить решение учителя на обычные функции, то получится такой код:
const bind = function (context, fn) {
  return function (...args) { // упаковка входных данных в массив
    return fn.apply(context, args);
  };
};

----

Как это работает:

bind обычно вызывается как метод на объекте функции,
поэтому требуется передача аргументом только контекста:
const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const bindedFn1 = fn.bind(obj);
в данной задаче bind является отдельной функцией, а не методом, поэтому fn передаётся аргументом:
const bindedFn2 = bind(obj, fn); // возврат функции из функции

bindedFn1(7); // 12
bindedFn2(7); // 12

----

Альтернативное решение:
const bind = (context, fn) => (...args) => fn.call(context, ...args);
*/
// END

// # 02
// BEGIN
// export default (objects, callback) => objects.forEach((object) => callback.call(object));
// END

const each = (coll, fn) => {

    return coll.forEach((item) => fn.call(item));
}

const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
];
each(objects, function callback() {
    this.name = this.name.split('').reverse().join('');
});

// console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];

// #03
class Point {
// export default class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

};


class Segment{
// export default class {
    constructor(beginPoint, endPoint) {
        this.beginPoint = beginPoint;
        this.endPoint = endPoint;
    }

    getBeginPoint() {
        return this.beginPoint;
    }

    getEndPoint() {
        return this.endPoint;
    }

};

//
// import Point from './Point.js';
// import Segment from './Segment.js';

// BEGIN (write your solution here) >

// export default (segment) => {
const reverse = (segment) => {

    const copyBeginPoint = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());

    const copyEndPoint = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());

    const reversed = new Segment(copyEndPoint, copyBeginPoint);
    return reversed;

};



// BEGIN
function getX() {
    return this.x;
}

function getY() {
    return this.y;
}

export default function Point(x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX;
    this.getY = getY;
}
//  < END

// Prototypes
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
};

Money.prototype.getValue = function getValue() {
    return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
}

Money.prototype.exchangeTo = function exchangeTo(currency) {
    if (this.currency === currency) {
        return this.currency;
    } else if (currency === 'eur') {
        return new Money(this.getValue() * 0.7, currency);
    } else if (currency === 'usd') {
        return new Money(this.getValue() * 1.2, currency);
    }
};

Money.prototype.add = function add(amount) {
    if (this.currency === amount.currency) {
        return new Money(this.value + amount.value, this.currency);
    } else if (this.currency === 'usd') {
        return new Money(this.value + amount.value * 1.2, this.currency);
    } else if (this.currency === 'eur') {
        return new Money(this.value + amount.value * 0.7, this.currency);
    };
}

Money.prototype.format = function format() {
    // (4000).toLocaleString(undefined, { style: 'currency', currency: 'gbp' });  => 4,000.00 £

    return this.value.toLocaleString(undefined, { style: 'currency', currency: `${this.getCurrency()}` })

}

// magic
// export default
// const magic = (...numbers) => {
//
//     // here we get sum of numbers get
//     let accum = 0;
//     const sum = numbers.reduce((accum, num) => {
//         const result = accum + num;
//         return result;
//     }, 0);



//
//     accum = sum;
//     const inner = (accum, ...items) => {
//
//     };
//
//
//     //inner.valueOf() + result
//
//     // terminal case?
//
//     return inner();
//     // return accum;
// };
// // END
//
// console.log(
//     magic(), // == 0, // true
//     magic(5, 2, -8), // == -1, // true
//     // magic(1, 2)(3, 4, 5)(6)(7, 10) , //== 38 // true
//     // magic(4, 8, 1, -1, -8)(3)(-3)(7, 2), // == 13; // true
//
// );


// # >
class Cart {
    constructor() {
        this.content = [];
    }

    addItem(item, count) {

        this.content.push(
            {
                item: item,
                count: count
            }
        );
    }

    getItems() {
        return this.content;
    }

    getCost() {
        const arr = this.getItems();
        const sum = arr.reduce((accum, product) => {
            const result = accum + product.item.price * product.count;
            return result;
        }, 0);
        return sum;

    }

    getCount() {
        const arr = this.getItems();
        const count = arr.reduce((accum, num) => {
            const result = accum + num.count;
            return result;
        }, 0);
        return count;
    }

}

// BEGIN
// export default class Cart {
//     constructor() {
//         this.items = [];
//     }
//
//     addItem(item, count) {
//         const items = this.getItems();
//         items.push({ item, count });
//     }
//
//     getItems() {
//         return this.items;
//     }
//
//     getCount() {
//         return _.sumBy(this.getItems(), (goods) => goods.count);
//     }
//
//     getCost() {
//         return _.sumBy(this.getItems(), (goods) => goods.item.price * goods.count);
//     }
// }
// < END

// ERRORs

const parseJson = (text) => {
    try {
        return JSON.parse(text);
    } catch (e) {
        throw new ParseError('ParseError: Invalid JSON string');
    }
}
// export default class ParseError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'ParseError';
//   }
// }

