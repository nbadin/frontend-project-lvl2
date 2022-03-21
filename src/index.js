import parser from './parsers.js';
import getDifference from './getDifference.js';
import stylish from './stylish.js';

const genDiff = (firstFile, secondFile) => {
  const firstObject = parser(firstFile);
  console.log(JSON.stringify(firstObject))
  const secondObject = parser(secondFile);
  return stylish(getDifference(firstObject, secondObject));
};

export default genDiff;
