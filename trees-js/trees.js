import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const makeTree = () => { 
  const tree = mkdir('nodejs-package', [ // { hidden: true },
    mkfile('Makefile'),
    mkfile('README.md'),
    mkdir('dist'),
    mkdir('__tests__', [
      mkfile('half.test.js', { type: 'text/javascript' } ) // { type: 'text/javascript' }
    ]),
    mkfile('babel.config.js', { type: 'text/javascript' }), //
    mkdir('node_modules', [ // { owner: 'root', hidden: false },
      mkdir('@babel', [
        mkdir('cli', [
          mkfile('LICENSE')
        ])
      ])
    ], { owner: 'root', hidden: false })
  ], { hidden: true })
  return tree;
};


console.log(makeTree());

//

import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, isDirectory, getName, getMeta,
} from '@hexlet/immutable-fs-trees';


export default (tree) => {
  const children = getChildren(dir);
  const newChildren = children.map((child) => {
    const name = getName(child);
    const newMeta = _.cloneDeep(getMeta(child));

    if (isDirectory(child)) {
      return mkdir(name, getChildren(child), newMeta);
    }
    if (isFile(child) && !getName(child).endsWith('.jpg')) {
      return mkfile(name, newMeta)
    }
    if (isFile(child) && getName(child).endsWith('.jpg')) {
      let metaCompressed = newMeta;
      metaCompressed.size = newMeta.size / 2;
      return mkfile(name, metaCompressed);
    }
  })
  const newMeta = _.cloneDeep(getMeta(tree));
  const tree2 = mkdir(getName(tree), newChildren, newMeta);
  return tree2;
};

//
const changeOwner = (tree, owner) => {
  const name = getName(tree);

  const newMeta = _.cloneDeep(getMeta(tree));
  newMeta.owner = owner;

  if (isFile(tree)) {
    // Возвращаем обновлённый файл
    return mkfile(name, newMeta);
  }

  const children = getChildren(tree);
  // Ключевая строчка
  // Вызываем рекурсивное обновление каждого ребёнка
  const newChildren = children.map((child) => changeOwner(child, owner));
  const newTree = mkdir(name, newChildren, newMeta);

  // Возвращаем обновлённую директорию
  return newTree;
};

/////


const tree = mkdir('/', [
  mkfile('oNe'),
  mkfile('Two'),
  mkdir('THREE'),
]);

const children = getChildren(tree);

const newChildren = children.map((child) => {
  const name = getName(child);
  const newMeta = _.cloneDeep(getMeta(child));

  if (isDirectory(child)) {
    return mkdir(name.toLowerCase(), getChildren(child), newMeta);
  }

  return mkfile(name.toLowerCase(), newMeta);
});


// Обязательно копируем метаданные
const newMeta = _.cloneDeep(getMeta(tree));
const tree2 = mkdir(getName(tree), newChildren, newMeta);

// recursive change of name files and directories to lowercase
// BEGIN (write your solution here)

const downcaseFileNames = (tree) => {

  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));

  if (isFile(tree)) {
    return mkfile(name.toLowerCase(), newMeta);
  }

  const children = getChildren(tree);
  
  const newChildren = children.map((child) => downcaseFileNames(child));
  const newTree = mkdir(name.toLowerCase(),  newChildren, newMeta);

  return newTree;

};
// export default downcaseFileNames;
// END

const tree3 = {
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