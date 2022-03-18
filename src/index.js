import * as fs from 'fs';
import getDifference from './getDifference.js';

const genDiff = (filepath1, filepath2) => {
  const firstFile = JSON.parse(fs.readFileSync(filepath1, {encoding: 'utf8'}));
  const secondFile = JSON.parse(fs.readFileSync(filepath2, {encoding: 'utf8'}));
  return getDifference(firstFile, secondFile);
}

export default genDiff;