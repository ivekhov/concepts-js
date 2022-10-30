import { mkdir, mkfile, isFile, getName, getMeta, getChildren } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

// data
const tree = {
  name: '/',
  type: 'directory',
  meta: {},
  children: [
    {
      name: 'eTc',
      type: 'directory',
      meta: {},
      children: [
        {
          name: 'NgiNx',
          type: 'directory',
          meta: {},
          children: [],
        },
        {
          name: 'CONSUL',
          type: 'directory',
          meta: {},
          children: [{ name: 'config.json', type: 'file', meta: {} }],
        },
      ],
    },
    { name: 'hosts', type: 'file', meta: {}, },
  ],
};

// retrun new object with changed name in lowe case:
const downcaseFileNames = (tree) => {

  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));

  if (isFile(tree)) {
    return mkfile(name.toLowerCase(), newMeta);
  }

  const children = getChildren(tree);
  
  const newChildren = children.map((child) => downcaseFileNames(child));

  // if need to lower dirs name
  // const newTree = mkdir(name.toLowerCase(),  newChildren, newMeta);

  // if lower only files names inside dir
  const newTree = mkdir(name,  newChildren, newMeta);
  // return mkdir(name, newChildren, newMeta);

  return newTree;

};

const result = downcaseFileNames(tree);

// priting
// console.log(JSON.stringify(tree, null, '\  '));
// console.log('-------------------------------');
// console.log(JSON.stringify(result, null, '\  '));

