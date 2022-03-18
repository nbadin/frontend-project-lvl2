import {strict as assert } from 'assert'
import genDiff from '../src/index.js';
import process from 'process';

const result = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';
const path1 = `${process.cwd()}/__fixtures__/file1.json`;
const path2 = `${process.cwd()}/__fixtures__/file2.json`;

assert.equal(genDiff(path1, path2), result)

