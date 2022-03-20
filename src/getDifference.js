import _ from 'lodash';

const getDifference = (firstObject, secondObject) => {
  const status = { affinity: '    ', add: '  + ', del: '  - ' };
  const result = [];
  const allKeys = _.uniq([...Object.keys(firstObject), ...Object.keys(secondObject)]).sort();
  allKeys.forEach((key) => {
    const isThereAProperty = Object.hasOwn(firstObject, key) && Object.hasOwn(secondObject, key);
    if (isThereAProperty && firstObject[key] !== secondObject[key]) {
      result.push([status.del, `${key}: ${firstObject[key]}`].join(''));
      result.push([status.add, `${key}: ${secondObject[key]}`].join(''));
    } else if (isThereAProperty && firstObject[key] === secondObject[key]) {
      result.push([status.affinity, `${key}: ${firstObject[key]}`].join(''));
    } else if (!isThereAProperty && (Object.hasOwn(firstObject, key))) {
      result.push([status.del, `${key}: ${firstObject[key]}`].join(''));
    } else if (!isThereAProperty && (Object.hasOwn(secondObject, key))) {
      result.push([status.add, `${key}: ${secondObject[key]}`].join(''));
    }
  });
  result.unshift('{');
  result.push('}');
  return result.join('\n');
};

export default getDifference;
