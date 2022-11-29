/* eslint-disable no-useless-escape */
import _ from 'lodash';

const formatterOfType = (value) => {
  if (_.isArray(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `\'${value}\'`;
  }
  return value;
};

const getDiffInString = (tree, parents = []) => tree
  .filter((item) => item.status !== 'equal')
  .map((item) => {
    const property = parents.length === 0 ? item.key : [...parents, item.key].join('.');
    if (item.status === 'deleted') {
      return `Property '${property}' was removed`;
    }

    if (item.status === 'added') {
      const value = formatterOfType(item.value);
      return `Property '${property}' was added with value: ${value}`;
    }

    if (item.status === 'changed') {
      const oldValue = formatterOfType(item.oldValue);
      const newValue = formatterOfType(item.newValue);
      return `Property '${property}' was updated. From ${oldValue} to ${newValue}`;
    }

    if (item.status === 'hasChildren') {
      const newParents = [...parents, item.key];
      return [...(getDiffInString(item.children, newParents))].join('\n');
    }
    return '';
  });

const plain = (tree) => getDiffInString(tree).join('\n');

export default plain;
