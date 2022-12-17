# Асинхронное программирование в JS

https://ru.hexlet.io/courses/js-asynchronous-programming

## Стек вызовов

Синхронность - последовательное выполнение кода

```js
import fs from 'fs';

// Вызовется тогда, когда выполнится асинхронная операция
const callback = (_error, data) => console.log(data);
// префиксом нижнего подчёркивания обозначается неиспользуемый аргумент

// readFile запускает на выполнение задачу чтения файла.
// Вторым параметром обязательно передать utf-8. Только в этом случае данные прочитаются в строковом виде.
fs.readFile('./myfile', 'utf-8', callback);
```

Как только операция чтения файла завершилась, интерпретатор Node.js внутри себя вызвал колбек, передав ему параметром содержимое файла

Асинхронная функция хоть и запустилась на выполнение сразу, но колбек вызывается только в тот момент, когда в текущем стеке вызовов не останется ни одной функции. В нашем случае это означает, что колбек запускается только после того, как отработает весь файл. И этот запуск породит свой собственный стек вызовов.

## Тезисы

- В асинхронном коде каждый колбек асинхронной функции порождает свой собственный стек вызовов, который, в свою очередь, может выполнять новые асинхронные вызовы и так далее до бесконечности.

- Асинхронной является любая функция, внутри которой есть хоть одна асинхронная операция.

- Каждая асинхронная функция обязана принимать на вход колбек, так как это единственный способ упорядочивать события и отслеживать завершение.

- Эта функция должна иметь общепринятую сигнатуру, то есть принимать первым параметром ошибку и вторым — сами данные

- Возвращать значение из колбека бессмысленно, так как оно никак не может быть использовано. Return используется в случаях, когда нужно передать управление

- Асинхронный код нельзя писать как синхронный. Функции должны быть вложены в колбеки друг друга, только тогда появляется контроль выполнения асинхронных операций.

- Асинхронный код не блокирует операции ввода и вывода. Это позволяет выполнять полезный код, пока идут эти операции.

-  Первым выполнится колбек более быстрой асинхронной операции, затем выполнится второй. (порядок выполнения колбеков двух асинхронных операций, запущенных сразу друг за другом)

- асинхронных операций можно запустить сразу сколько угодно. Эффективность их выполнения зависит от рантайма, операционной системы и железа


## Ошибки и их обработка

Асинхронные функции всегда имеют дело с внешней средой (операционной системой). Это значит, что любая асинхронная функция потенциально может завершиться с ошибкой. Причём не важно возвращает ли она какие-то данные или нет, ошибка может возникнуть всегда. Именно по этой причине колбеки всех асинхронных функций первым параметром принимают ошибку err и, соответственно, проверять её наличие придётся руками. Если пришёл null, то ошибки нет, если не null — есть. Это очень важное соглашение, которого придерживаются не только разработчики стандартной библиотеки, но и все разработчики сторонних решений.


```js

import fs from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
    fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
        if (error1) {
            cb(error1);
            return;
        }
        fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
            if (error2) {
                cb(error2);
                return;
            }
            fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
                if (error3) {
                    cb(error3);
                    return;
                }
                cb(null); // не забываем последний успешный вызов
            });
        });
    });
};


```
### Стек асинхронных вызовов функции и ее ошибок


## Параллельное выполнение операций - пример чтения двух файлов и записи

Для отслеживания состояния выполнения этих операций придётся ввести глобальное состояние (относительно этих операций), через которое мы будем отслеживать завершённость и в котором сохраним данные. И только когда все операции завершились — запишем новый файл. Кроме того, нам нужно чётко разделять данные первого и второго файлов, так как запись в новый файл (в отличие от чтения) должна происходить в определённом порядке.
```js
const state = {
  count: 0,
  results: [],
};

fs.readFile('./first', 'utf-8', (error1, data1) => {
  state.count += 1;
  state.results[0] = data1;
});

fs.readFile('./second', 'utf-8', (error2, data2) => {
  state.count += 1;
  state.results[1] = data2;
});
```

Когда обе операции завершатся, состояние заполнится данными, а значение count станет 2. Именно на это условие мы и завяжем наш код:

```js
import fs from 'fs';

const state = {
    count: 0,
    results: [],
};

const tryWriteNewFile = () => {
    if (state.count !== 2) {
        return; // guard expression
    }

    fs.writeFile('./new-file', state.results.join(''), (error) => {
        if (error) {
            return;
        }
        console.log('finished!');
    });
};

console.log('first reading was started');
fs.readFile('./first', 'utf-8', (error1, data1) => {
    console.log('first callback');
    if (error1) {
        return;
    }
    state.count += 1;
    state.results[0] = data1;
    tryWriteNewFile();
});

console.log('second reading was started');
fs.readFile('./second', 'utf-8', (error2, data2) => {
    console.log('second callback');
    if (error2) {
        return;
    }
    state.count += 1;
    state.results[1] = data2;
    tryWriteNewFile();
});

// Один запуск
// node index.js
// first reading was started
// second reading was started
// second callback
// first callback
// finished!

// Другой запуск
// node index.js
// first reading was started
// second reading was started
// first callback
// second callback
// finished!

```
Аналог из библиотеки для упрощения

```js
import { map } from 'async';
import fs from 'fs';

map(['./first', './second'], fs.readFile, (err1, results) => {
  if (err1) {
    return;
  }
  fs.writeFile('./new-file', results.join(''), (err2) => {
    if (err2) {
      return;
    }
    console.log('finished!');
  });
});

```
Official docs example
https://caolan.github.io/async/v3/ 
```js

async.map(['file1','file2','file3'], fs.stat, function(err, results) {
    // results is now an array of stats for each file
});

async.filter(['file1','file2','file3'], function(filePath, callback) {
  fs.access(filePath, function(err) {
    callback(null, !err)
  });
}, function(err, results) {
    // results now equals an array of the existing files
});

async.parallel([
    function(callback) { ... },
    function(callback) { ... }
], function(err, results) {
    // optional callback
});

async.series([
    function(callback) { ... },
    function(callback) { ... }
]);


```

## Таймеры

https://ru.hexlet.io/courses/js-asynchronous-programming/lessons/timers/theory_unit


