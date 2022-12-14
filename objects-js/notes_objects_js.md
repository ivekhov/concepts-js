# Объекты в JS

По мотивам курса https://ru.hexlet.io/courses/js-objects

## Объект

Фактически - это словарь

```js
const user = {
  email: 'inna@example.com',
  name: 'Inna',
  password: 'qwerty',
  dependencies: [
    // ...
  ],
};
```

Функции и массивы в JavaScript тоже являются объектами

Запятая после последнего элемента - ок

Для обращения к свойствам объектов используется точечный синтаксис или в скобках 

Обращение к свойству через точку не позволяет задавать имя динамически, а способ через скобки — позволяет:

```js
user.name;

user['name'];

//


```

Несмотря на то, что объект объявлен как константа, он меняется. Причина такого поведения точно такая же, как и в случае массивов. В константе хранится не сам объект, а ссылка на него. Это значит, что менять объект можно, но заменить объект на другой – нельзя:


Удалить элемент из объекта можно с помощью оператора delete:

(!) Несмотря на наличие удаления, удалять свойства из объекта плохая практика.

```js
const user = { name: 'Vasya', wrongProp: 'bug' };

delete user.wrongProp;
```

## Ссылочный тип данных

Объекты – **ссылочный** тип данных. То есть переменные и константы хранят не сами объекты (их данные), а ссылку на них. Поэтому возникает ощущение, что константы в JavaScript изменяемы, но это не так. Главное понимать, что константа связана со ссылкой, а не с данными в случае объекта


## Проверка на существование свойства 


```js
// Проверка на существование
    // ...
    if (Object.hasOwn(OBJECT_WHERE_IS_SEEKED, ELEMENT_WHAT_IS_SEEKED)) 
    //...
```

## Оператор нулевого слияния

позволяет задать значение по умолчанию в случае, когда оно равно null или undefined.

```js
//...
for (const name of fruits) {
  result[name] = (result[name] ?? 0) + 1; // ес
}
//...
```

## Обход объекта 

Объект в JavaScript, в отличие от массива, не является коллекцией. Его нельзя обходить как обычный массив с помощью цикла for..of

Самый простой – использовать конструкцию for..in, которая очень похожа на обычный цикл.

```js

for (const prop in course) 
```

for..in выводит не только свойства самого объекта, но и свойства, добавленные в прототип этого объекта

в подавляющем большинстве случаев это нежелательное поведение. Именно поэтому for..in используется не так часто, как может показаться. Гораздо более распространенный способ – обходить ключи. Метод Object.keys(obj) позволяет получить массив всех ключей объекта

Далее мы можем обойти в цикле массив ключей и получить нужные значения. На практике, обычно, сначала получают массив ключей и что-то с ним делают. Например, фильтруют, отбирая только нужные ключи, а затем обрабатывают исходный объект или создают новый, получая в цикле значение по ключу.


```js
const course = { name: 'JS: React', slug: 'js-react' };

const keys = Object.keys(course); // [ 'name', 'slug' ]

for (const key of keys) {
  console.log(course[key]);
}

```
Если ключи в процессе обхода не используются, то можно сразу получить массив значений свойств объекта. Это делает метод Object.values(obj):

```js
const course = { name: 'JS: React', slug: 'js-react' };

const values = Object.values(course); // [ 'JS: React', 'js-react' ]

for (const value of values) {
  console.log(value);
}
```

Ну, и последний вариант, метод, который возвращает сразу ключи и значения объекта. То есть каждый элемент сам будет массивом, содержащим ключ и соответствующее ему значение — [ key, value ]. За это отвечает метод Object.entries(obj)

Обойти такой массив циклом for...of не составит никакого труда, а деструктуризация позволит сделать это красиво 


```js
const course = { name: 'JS: React', slug: 'js-react' };

const entries = Object.entries(course);
// [[ 'name', 'JS: React' ], [ 'slug', 'js-react' ]]


for (const [key, value] of entries) {
  console.log(key);
  console.log(value);
}

//

for (const [key, value] of entries) {
    if (value === expectedValue) {
      result.push(key);
    }
  }

```

## Вложенность объектов

Значением свойства объекта может быть всё, что угодно, включая другой объект или массив:

Для вывода объекта на печать вместо консоли использовать

```js
console.log(JSON.stringify(obj));
```

## Оператор опциональной последовательности - работа с неизвестным и потенциально бесконечным количеством вложений


В стандартной библиотеке
```js
const obj = {};
obj?.one?.two?.three // undefined
```

## Оператор нулевого слияния 

С помощью оператора нулевого слияния, можно не только получить значение цепочки любой вложенности, но и определить значение по умолчанию для него.

```js
const obj = {};
obj?.one?.two?.three ?? 'defaultValue' // 'defaultValue'


//Значение по умолчанию возвращается только в том случае, когда слева undefined или null.
```
## В lodash функция **_.get()**

```js
import _ from 'lodash';

const obj = {};

const value = _.get(obj, 'one.two.three', 'defaultValue'); // 'defaultValue'

//
_.get(obj, ['one', 'two', 'three'], 'defaultValue'); // 'defaultValue'
```

## Слияние массивов

Метод Object.assign() берёт объект, переданный первым параметром, и переносит в него всё из объектов, переданных остальными параметрами.

```js
const obj1 = { a: 'a', b: 'b' };
const obj2 = { c: 'c', b: 'v' };
Object.assign(obj1, obj2);
console.log(obj1);
// => { a: 'a', b: 'v', c: 'c' }
```

```js
this.options = { ...defaultOptions, ...options };
```

## Клонирование - копирование объектов

Через тот же метод Object.assign(). Для этого достаточно первым параметром передать пустой объект, а вторым тот, который нужно клонировать

Клонирование также выполняют с помощью функции clone() библиотеки lodash. Несмотря на то, что ее результат идентичен примерам выше, благодаря своему имени она лучше выражает смысл операции.

Клонирование способами, приведенными выше, **не затрагивает вложенные объекты**. Они оказываются в новом объекте по ссылке из старого.
Shallow - поверхностное копирование

```js
import _ from 'lodash';

const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };
const copyOfUser = _.clone(user);
```

**Глубокое копирование**  _.cloneDeep() из библиотеки lodash.

```js
import _ from 'lodash';

const user = { company: { name: 'Hexlet' } };
const copyOfUser = _.cloneDeep(user);

user.company === copyOfUser.company; // false
```

## Spread и создание новых объектов через поверхностное копирование

```js
const copyOfUser = { ...someObject };

```

Spread оператор – это три точки перед именем переменной (или константы), внутри определения объекта. Он раскладывает соответствующий объект внутри нового объекта. С его помощью можно получить только копию, он не может изменять существующие объекты.

Всё, что появляется с правой стороны спреда, будет иметь приоритет при слиянии, аналогично тому как работает Object.assign(). В свою очередь всё что слева — имеет более низкий приоритет

Сам спред оператор может использоваться в рамках одного объекта любое количество раз

## Деструктуризация

```js
// 1
const person = { firstName: 'Rasmus', lastName: 'Lerdorf', manager: true };

const { firstName, manager } = person;

// 2
const person = { firstName: 'Rasmus', lastName: 'Lerdorf', manager: true };

const { manager: isManager } = person; // isManager - новый объект ! 


//3
const { manager = false } = person; // новое значение пол умолчанию

// 4 - оператор ...rest

const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };

const { name, ...rest } = user;

```

------
