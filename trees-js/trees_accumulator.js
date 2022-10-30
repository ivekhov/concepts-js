import { mkdir, mkfile, isFile, isDirectory, getName, getMeta, getChildren } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';
import * as path from "node:path";


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

 // ['/etc/nginx/nginx.conf', '/etc/consul/config.json']


 const findFilesByName = (tree, prefix) => {
  const crawler = (node, ancestry) => {
    const name = getName(node);
    const newAncestry = path.join(ancestry, name);

    if (isFile(node)) {
      return name.includes(prefix) ? newAncestry : [];
    }
    const children = getChildren(node);
    return children.flatMap((child) => crawler(child, newAncestry));

  };

  return crawler(tree, '');

 };
 export default findFilesByName; 

 //
 console.log(findFilesByName(tree, 'co'));


