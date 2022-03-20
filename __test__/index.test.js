import process from 'process';
import genDiff from '../src/index.js';



test('gendiff with json file', () => {
  const result1 = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';
  const result2 = '{\n  + follow: false\n    host: hexlet.io\n  + proxy: 123.234.53.22\n  - timeout: 20\n  + timeout: 50\n  - verbose: true\n}';
  const firstpath = `${process.cwd()}/__fixtures__/file1.json`;
  const secondpath = `${process.cwd()}/__fixtures__/file2.json`;
  expect(genDiff(firstpath, secondpath)).toEqual(result1);
  expect(genDiff(secondpath, firstpath)).toEqual(result2);
});

test('gendiff with yaml file', () => {
  const result1 = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';
  const result2 = '{\n  + follow: false\n    host: hexlet.io\n  + proxy: 123.234.53.22\n  - timeout: 20\n  + timeout: 50\n  - verbose: true\n}';
  const firstpath = `${process.cwd()}/__fixtures__/file1.yaml`;
  const secondpath = `${process.cwd()}/__fixtures__/file2.yml`;
  expect(genDiff(firstpath, secondpath)).toEqual(result1);
  expect(genDiff(secondpath, firstpath)).toEqual(result2);
})