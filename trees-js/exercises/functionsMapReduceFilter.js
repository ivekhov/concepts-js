// https://ru.hexlet.io/challenges/js_trees_map_filter_reduce_exercise

import _ from 'lodash';
import { mkdir, mkfile, getName, isDirectory, getChildren, getMeta } from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
    mkdir('etc', [
      mkdir('nginx', [
        mkdir('conf.d'),
      ]),
      mkdir('consul', [
        mkfile('config.json'),
      ]),
      mkdir('TEST_DIR', [
        mkdir('TEST_CONF.d'),
      ]),
    ]),

    mkfile('hosts'),
    mkdir('OUTER_DIR', [
      mkdir('OUTER_CONF.d'),
	    mkdir('OUTER_CONF_ANOTHER.d'),
    	mkfile('FILE4'),
    ]),

    mkfile('FILE2'),
    mkfile('FILE3'),
  ]);


const filter = (inner, tree) => {
  
  const copyTree = _.cloneDeep(tree);
  const isFiltered = inner(tree);
  
  if (!isFiltered) return null;

  if (!isDirectory(tree)) return copyTree;
  
  const children = getChildren(tree);

  for (const child of children) {

    filter(inner, child);

    const newMeta = _.cloneDeep(getMeta(child));
    const newName = getName(child);

    return mkdir(newName, newMeta);
  
  }  
}
  


//console.log(JSON.stringify(tree));
console.log('---------------TEST------------------------------------');
const res = filter((n) => isDirectory(n), tree);
console.log(JSON.stringify(res));


//----------------------------------

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

// const test = map(n => ({ ...n, name: getName(n).toUpperCase() }), tree);
// console.log(JSON.stringify(test));

