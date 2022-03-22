import parser from './parsers.js';
import getTree from './getTree.js';
import formatter from './formatters/index.js';

const genDiff = (firstFile, secondFile, format = 'stylish') => {
  const firstObject = parser(firstFile);
  const secondObject = parser(secondFile);
  return formatter(getTree(firstObject, secondObject), format);
};

export default genDiff;
