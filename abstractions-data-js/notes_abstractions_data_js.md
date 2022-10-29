# JS Абстракция с помощью данных

https://ru.hexlet.io/courses/js-data-abstraction

## Скрытие внутреннего устройства объекта

Геттеры и сеттеры

```js
// То есть мы работаем не так
const point = [1, 4]; // мы знаем, что это массив
console.log(point[1]); // прямое обращение к массиву

// А так
const point = makePoint(3, 4); // мы не знаем как устроена точка
console.log(getY(point)); // мы получаем доступ к частям только через селекторы
```

## Абстракция данных 
Скрытие структуры данных за набором функций, выполняющих взаимодействие с ней. 

Асбтракция не защищает данные (!).
Защита данных структуры от возможности модификации напрямую в обход функций - это другое понятие. 

Абстракция реализуется посредством функций. Внутри функций, реализующих абстракцию, обращаться к данным можно напрямую. 

## Интерфейсы

Интерфейсом называют 

**набор функций (имена и их сигнатуры, то есть количество и типы входящих параметров, а также возвращаемое значение), не зависящих от конкретной реализации**.

Такое определение один в один совпадает с понятием абстрактного типа данных. Например, для точек интерфейсными являются все функции, которые мы реализовывали в практике, и которые описывались в теории.

Как соотносятся между собой понятия абстракция и интерфейс? 

**Абстракция** — это слово, описывающее в первую очередь те данные, с которыми мы работаем. Например, почти каждое веб-приложение включает в себя абстракцию "пользователь". 

**Интерфейсом** же называется набор функций, с помощью которых можно взаимодействовать с данными.

абстрактный тип данных определяется в том числе как 'Математическая модель для типов данных, определяемая в терминах возможных операций над этими данными и их значений'

**Cигнатура функции** - входные и выходные параметры включая их типы

```js
// Функции makeUser, getAge, isAdult — интерфейс абстракции User.
// Они используются внешним (пользовательским, вызывающим) кодом.
const makeUser = (name, birthday) => ({ name, birthday });

```

## Уровневое проектирование

Различные уровни абстракции, например, 2 или 3

## Инварианты

Инвариант в программировании — логическое выражение, определяющее непротиворечивость состояния (набора данных).
Обычно для конкретного объекта / сущности (доменное правило)

### Примеры

```js
// 07
const makeRectangle = (point, width, height) => {

  const leftUpper = point;
  const rightUpper = makeDecartPoint(getX(point) + width, getY(point));
  const leftFloor = makeDecartPoint(getX(point), getY(point) - height);
  const rightFloor = makeDecartPoint(getX(point) + width, getY(point) - height);

  const rectangle = {
    leftUpperPoint: leftUpper,
    rightUpperPoint : rightUpper, 
    leftFloorPoint : leftFloor,
    rightFloorPoint: rightFloor,
  }
  return rectangle;
};

const containsOrigin = (rectangle) => {

  const leftUpperQuadrant = getQuadrant(rectangle.leftUpperPoint);
  const rightUpperQuadrant = getQuadrant(rectangle.rightUpperPoint);
  const leftFloorQuadrant = getQuadrant(rectangle.leftFloorPoint);
  const rightFloorQuadrant = getQuadrant(rectangle.rightFloorPoint);
  const angles = [leftUpperQuadrant, rightUpperQuadrant, leftFloorQuadrant, rightFloorQuadrant].sort();
  const ideal = [1, 2, 3 , 4].sort();

  return _.isEqual(angles, ideal);

// 08

const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  return {
    numerator: numer / gcd,
    denominator: denom / gcd,
  }
};

const getNumer = (rationNum) => {
  return rationNum.numerator;
};

const getDenom = (rationNum) => {
  return rationNum.denominator;
};

const add = (rat1, rat2) => {
  const numer = getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1);
  const denom = getDenom(rat1) * getDenom(rat2);
  return makeRational(numer, denom);
};

const sub = (rat1, rat2) => {
  const numer = getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1);
  const denom = getDenom(rat1) * getDenom(rat2);
  return makeRational(numer, denom);
};
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

```
