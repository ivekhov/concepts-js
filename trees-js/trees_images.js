import { mkdir, mkfile, isFile, isDirectory, getName, getMeta, getChildren } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations')
]);


const compressImages = (dir) => {
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
      metaCompressed.size = newMeta.size * 0.5;
      return mkfile(name, metaCompressed);
    }
  })
  const newMeta = _.cloneDeep(getMeta(dir));
  const tree2 = mkdir(getName(dir), newChildren, newMeta);
  return tree2;
};





//
console.log(JSON.stringify(tree,null, '\  '));
console.log('-------------------------------');
const newTree = compressImages(tree);
console.log(JSON.stringify(newTree, null, '\  '));


// BEGIN
// export const compressImages = (node) => {
  const children = getChildren(node);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if (!isFile(child) || !name.endsWith('.jpg')) {
      return child;
    }
    const meta = getMeta(child);
    const newMeta = _.cloneDeep(meta);
    newMeta.size /= 2;
    return mkfile(name, newMeta);
  });
  const newMeta = _.cloneDeep(getMeta(node));
  return mkdir(getName(node), newChildren, newMeta);
// };
// END