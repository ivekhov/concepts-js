import { mkdir, mkfile, isFile, isDirectory, getName, getMeta, getChildren } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

const getDirSize = (node) => {

  if (isFile(node)) {
    return node.meta.size;
  }

  const children = getChildren(node);
  const descChildren = children.map(getDirSize);

  return _.sum(descChildren);
};

const du = (tree) => { 
  const children = getChildren(tree);
  const result = children.map((child) => [getName(child), getDirSize(child)]);

  return result;
};

const newTree = du(tree);
console.log(newTree);

// sort by value
const sortTree = newTree.sort((a, b) => b[1] - a[1]);
console.log(sortTree);

// var sortedArray = array.sort(function(a, b) { return a - b; });

// let y = [
//   ['etc', 10280],
//   ['hosts', 1000],
//   ['resolve', 3500],
// ]



// const calculatefilesSize = (tree) => {
//   if (isFile(tree)) {
//     const meta = getMeta(tree);
//     return meta.size;
//   }

//   const children = getChildren(tree);
//   const sizes = children.map(calculatefilesSize);
//   return _.sum(sizes);
// };

// const du = (tree) => {
//   const children = getChildren(tree);
//   const result = children.map((child) => [getName(child), calculatefilesSize(child)]);
//   // Destructuring
//   result.sort(([, size1], [, size2]) => size2 - size1);
//   return result;
// };

// export default du;
// // END