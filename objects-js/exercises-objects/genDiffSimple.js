
import _ from 'lodash';

// BEGIN (write your solution here)

export default (oldObj, newObj) => {

  const oldKeys = _.keys(oldObj);
  const newKeys = _.keys(newObj);

  const intersects = _.intersection(oldKeys, newKeys);
  const deleted = _.difference(oldKeys, newKeys);
  const added = _.difference(newKeys, oldKeys);
  // const union = _.union(oldKeys, newKeys);

  const diff = {};
  added.reduce((acc, item) => {
    diff[item] = 'added';
  }, diff);
  deleted.reduce((acc, item) => {
    diff[item] = 'deleted';
  }, diff);

  intersects.reduce((acc, item) => {
    oldObj[item] === newObj[item] ? diff[item] = 'unchanged' : diff[item] = 'changed';
  }, diff);
  return diff;
};





