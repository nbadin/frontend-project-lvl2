/* eslint-disable max-len */
import _ from 'lodash';

const getTree = (firstFile, secondFile) => {
  const keys = _.sortBy(_.union(_.keys(firstFile), _.keys(secondFile)));

  return keys.map((key) => {
    if (!_.has(firstFile, key)) {
      const value = _.isPlainObject(secondFile[key]) ? getTree(secondFile[key], secondFile[key]) : secondFile[key];
      return { key, status: 'added', value };
    }

    if (!_.has(secondFile, key)) {
      const value = _.isPlainObject(firstFile[key]) ? getTree(firstFile[key], firstFile[key]) : firstFile[key];
      return { key, status: 'deleted', value };
    }

    if (_.isPlainObject(firstFile[key]) && _.isPlainObject(secondFile[key])) {
      return { key, status: 'hasChildren', children: getTree(firstFile[key], secondFile[key]) };
    }

    if (!_.isEqual(firstFile[key], secondFile[key])) {
      const oldValue = _.isPlainObject(firstFile[key]) ? getTree(firstFile[key], firstFile[key]) : firstFile[key];
      const newValue = _.isPlainObject(secondFile[key]) ? getTree(secondFile[key], secondFile[key]) : secondFile[key];
      return {
        key,
        status: 'changed',
        oldValue,
        newValue,
      };
    }

    return { key, status: 'equal', value: firstFile[key] };
  });
};

export default getTree;
