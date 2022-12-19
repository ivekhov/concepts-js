/*
https://ru.hexlet.io/challenges/js_trees_map_filter_reduce_exercise
ToDo FILTER function


filter принимает в качестве параметров предикат и дерево, а возвращает отфильтрованное дерево по предикату.

reduce кроме основных параметров (функция-обработчик и дерево) принимает также начальное значение аккумулятора.

map принимает на вход функцию-обработчик и дерево, а возвращает отображенное дерево.

map(n => ({ ...n, name: getName(n).toUpperCase() }), tree);
{
  name: '/',
  type: 'directory',
  meta: {},
  children: [
    {
      name: 'ETC',
      type: 'directory',
      meta: {},
      children: [{ name: 'CONFIG.JSON', type: 'file', meta: {} }],
    },
  ],
}
 */

// map принимает на вход функцию-обработчик и дерево, а возвращает отображенное дерево.
const map = (inner, tree) => {
  const newTree = {};
  const crawler = (func, item, acc) => {
  
    const entries = Object.entries(func(item));
    for (const [key, value] of entries) {
      acc[key] = value;
    }
    
    if (item.type === 'directory') {
      acc['children'] = [];
      for (const child of item.children) {
        const newAcc = {};
        acc['children'].push(newAcc);
        crawler(func, child, newAcc);
      }
    }
    return acc;
  };
  return crawler(inner, tree, newTree);
  
};



// Приводим имена всех директорий и файлов к верхнему регистру:
// map(n => ({ ...n, name: getName(n).toUpperCase() }), tree);


import { mkdir, mkfile, getName, isDirectory } from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('eTc', [
    mkfile('config.json')
  ]),
]);
const files = mkfile('cOnfIg.json');
const test = map(n => ({ ...n, name: getName(n).toUpperCase() }), tree);
// console.log(map(n => ({ ...n, name: getName(n).toUpperCase() }), tree));
// console.log(JSON.stringify(test));

const tree2 = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

const actual = map((n) => ({ ...n, name: n.name.toUpperCase() }), tree2);
// console.log(tree2);
// console.log(JSON.stringify(actual));

// filter принимает в качестве параметров предикат и дерево, а возвращает отфильтрованное дерево по предикату.
const filter = (inner, tree) => {
  const crawler = (innerFunc, item, acc) => {
    if (innerFunc(item)) {
      // console.log(item.name);
      const entries = Object.entries(item);
      for (const [key, value] of entries) {
        if (key !== 'children') {
          acc[key] = value;
        } else {
          acc['children'] = [];
          const newAcc = {};
          acc['children'].push(newAcc);
          for (const element of item.children) {
            if (isDirectory(element)) {
              console.log(element);
            }
            crawler(innerFunc, element, newAcc);
            // console.log(newAcc);
            
            // if (Object.keys(newAcc) < 1) {
            //   acc['children'].pop();
            // }
            
          }
        }
      }
    }
    return acc;
  }
  return crawler(inner, tree, {});
};


// console.log(tree);
// const res = filter((n) => isDirectory(n), tree);
// console.log(JSON.stringify(res));

const treeF = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx', [
      mkdir('conf.d'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);

const resF = filter((n) => isDirectory(n), treeF);
console.log(JSON.stringify(resF));
