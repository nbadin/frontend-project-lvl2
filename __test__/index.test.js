import * as fs from 'fs';
import process from 'process';
import genDiff from '../src/index.js';

let expectedDefault;
let expectedPlain;
let expectedJson;

beforeAll(() => {
  expectedDefault = fs.readFileSync('./__fixtures__/expected_default.txt', 'utf-8');
  expectedPlain = fs.readFileSync('./__fixtures__/expected_plain.txt', 'utf-8');
  expectedJson = JSON.parse(fs.readFileSync('./__fixtures__/expected_json.json'));
});

test('gendiff with yaml file', () => {
  const firstpath = `${process.cwd()}/__fixtures__/file1.yaml`;
  const secondpath = `${process.cwd()}/__fixtures__/file2.yml`;
  expect(genDiff(firstpath, secondpath)).toEqual(expectedDefault);
});

test('gendiff with json file', () => {
  const firstpath = `${process.cwd()}/__fixtures__/file1.json`;
  const secondpath = `${process.cwd()}/__fixtures__/file2.json`;
  expect(genDiff(firstpath, secondpath)).toEqual(expectedDefault);
});

test('gendiff in plain format', () => {
  const firstpath = `${process.cwd()}/__fixtures__/file1.json`;
  const secondpath = `${process.cwd()}/__fixtures__/file2.json`;
  expect(genDiff(firstpath, secondpath, 'plain')).toEqual(expectedPlain);
});

test('gendiff in json format', () => {
  const firstpath = `${process.cwd()}/__fixtures__/file1.json`;
  const secondpath = `${process.cwd()}/__fixtures__/file2.json`;
  const expected = JSON.parse(genDiff(firstpath, secondpath, 'json'));
  expect(JSON.stringify(expected)).toEqual(JSON.stringify(expectedJson));
});
