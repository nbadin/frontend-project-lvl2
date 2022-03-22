import * as fs from 'fs';
import * as path from 'path';
import yaml from 'js-yaml';
import process from 'process';

const parser = (filename) => {
  const absolutePath = path.resolve(process.cwd(), filename);
  const extname = path.extname(absolutePath);
  if (extname === '.json') {
    return JSON.parse(fs.readFileSync(absolutePath), { encoding: 'utf8' });
  }
  if (extname === '.yml' || extname === '.yaml') {
    return yaml.load(fs.readFileSync(absolutePath), 'utf8');
  }
  throw new Error('Unsupported format of file');
};

export default parser;
