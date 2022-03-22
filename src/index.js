import parser from './parsers.js';
import getTree from './getTree.js';
import stylish from './stylish.js';

const genDiff = (firstFile, secondFile) => {
  const firstObject = parser(firstFile);
  console.log(JSON.stringify(firstObject))
  const secondObject = parser(secondFile);
  return stylish(getTree(firstObject, secondObject));
};

export default genDiff;
