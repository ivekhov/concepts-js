# OOP in JavaScript

https://ru.hexlet.io/courses/js-introduction-to-oop/

## Инкапсуляция

Инкапсуляция – это объединение функций и данных в рамках одной структуры, внутреннее состояние которой (данные) скрыто от внешнего мира. Иинкапсуляция это и объединение, и сокрытие там, где оно есть. Там где его нет, это просто объединение

```js
const company = {
  name: 'Hexlet',
  country: {
    name: 'Finland',
    getName: function getName() {
      return this.name;
    }
  },
};

console.log(company.country.getName()); // => ?
```

Example

```js
const makeExample = (numer, denom) => ({
  numer,
  denom,
  setNumer(newNumer) {
    this.numer = newNumer;
  },
  setDenom(newDenom) {
    this.denom = newDenom;
  },
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
  add(rational) {
    const newNumer = this.getNumer() * rational.getDenom() + rational.getNumer() * this.getDenom();
    const newDenom = this.getDenom() * rational.getDenom();
    return makeExample(newNumer, newDenom);
  },
});
```

## Контекст

Выше, когда давалось определение this, говорилось, что this ссылается на текущий объект, к которому привязан метод. И здесь кроется ключевое отличие this в JavaScript от this в других языках. В JavaScript this у метода может измениться:

```js
const company1 = { name: 'Hexlet', getName: function getName() { return this.name } };
const company2 = { name: 'Hexlet Plus' };

company1.getName(); // "Hexlet"

company2.getName = company1.getName;

// В обоих случаях одна и та же функция
company2.getName(); // "Hexlet Plus"
company1.getName(); // "Hexlet"
```

Вызов той же самой функции из другого объекта привел к смене объекта, на который ссылается this. Эта особенность называется поздним связыванием. Значение this ссылается на тот объект, из которого происходит вызов метода.

Лучше всего можно понять эту особенность, познакомившись с тем, как вызываются функции внутри самого JavaScript и откуда там берется this. Так как в JavaScript функции — это тоже объекты, то у них есть свои методы. Среди них есть метод call(), который и используется для вызова:
```js
const sayHi = () => 'Hi!';
sayHi.call(); // "Hi!"
```
Первым параметром эта функция принимает контекст - объект, на который и будет ссылаться this внутри функции. Функции для этого не обязательно быть методом:
```js
const getName = function getName() {
  return this.name;
};

const company1 = { name: 'Hexlet' };
// Функция вызывается напрямую, она не является методом
getName.call(company1); // "Hexlet"

const company2 = { name: 'Hexlet Plus' };
getName.call(company2); // "Hexlet Plus"
```
В этом и заключается весь секрет this. Это контекст, который JavaScript прокидывает автоматически в функцию, если она вызывается как метод. В этом случае можно точно сказать, к какому объекту она принадлежит.

-----

https://ru.hexlet.io/courses/js-introduction-to-oop/lessons/bind/theory_unit

