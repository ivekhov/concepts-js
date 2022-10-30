import { mkdir, mkfile, isFile, isDirectory, getName, getMeta, getChildren } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);
 
const getHiddenFilesCount = (tree) => {
  if (isFile(tree)) {
    if (getName(tree)[0].startsWith('.')) return 1;
    return 0;
  }
  const children = getChildren(tree);

  const descChildren = children.map(getHiddenFilesCount);

  return _.sum(descChildren);

};


console.log(getHiddenFilesCount(tree));

// const getHiddenFilesCount = (node) => {
//   const name = getName(node);
//   if (isFile(node)) {
//     return name.startsWith('.') ? 1 : 0;
//   }

//   const children = getChildren(node);
//   const hiddenFilesCounts = children.map(getHiddenFilesCount);
//   return _.sum(hiddenFilesCounts);
// };
