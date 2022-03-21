import _ from 'lodash';

const inWhichObjectIsTheData = (key, firstObj, secondObj) => {
  if (Object.hasOwn(firstObj, key) && Object.hasOwn(secondObj, key)) {
    return 0;
  }
  if (Object.hasOwn(firstObj, key) && !Object.hasOwn(secondObj, key)) {
    return -1;
  }
  if (!Object.hasOwn(firstObj, key) && Object.hasOwn(secondObj, key)) {
    return 1;
  }
  return undefined;
};

const getDifference = (firstObject, secondObject, depth = 0) => {
  const result = [];
  const keys = _.uniq([...Object.keys(firstObject), ...Object.keys(secondObject)]).sort();
  keys.forEach((key) => {
    if (inWhichObjectIsTheData(key, firstObject, secondObject) === -1) {
      const value = _.isObject(firstObject[key]) ? getDifference(firstObject[key], firstObject[key], depth + 1) : String(firstObject[key]);
      result.push({ key, value, status: 'delete', depth });
    } else if (inWhichObjectIsTheData(key, firstObject, secondObject) === 1) {
      const value = _.isObject(secondObject[key]) ? getDifference(secondObject[key], secondObject[key], depth + 1) : String(secondObject[key]);
      result.push({ key, value, status: 'add', depth });
    } else if (inWhichObjectIsTheData(key, firstObject, secondObject) === 0) {
      if (_.isObject(firstObject[key]) && _.isObject(secondObject[key])) {
        const value = getDifference(firstObject[key], secondObject[key], depth + 1);
        result.push({ key, value, status: 'equal', depth });
      } else if (firstObject[key] === secondObject[key]) {
        result.push({ key, value: String(secondObject[key]), status: 'equal', depth });
      } else if (firstObject[key] !== secondObject[key]) {
        const oldValue = _.isObject(firstObject[key]) ? getDifference(firstObject[key], firstObject[key], depth + 1) : String(firstObject[key]);
        const newValue = _.isObject(secondObject[key]) ? getDifference(secondObject[key], secondObject[key], depth + 1) : String(secondObject[key]);
        result.push({ key, oldValue, newValue, status: 'change', depth });
      }
    }
  });
  return result;
};

export default getDifference;
