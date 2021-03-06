import process from 'process';
import genDiff from '../src/index.js';

test('gendiff with yaml file', () => {
  const result = '{\n    common: {\n      + follow: false\n        setting1: Value 1\n      - setting2: 200\n      - setting3: true\n      + setting3: null\n      + setting4: blah blah\n      + setting5: {\n            key5: value5\n        }\n        setting6: {\n            doge: {\n              - wow: \n              + wow: so much\n            }\n            key: value\n          + ops: vops\n        }\n    }\n    group1: {\n      - baz: bas\n      + baz: bars\n        foo: bar\n      - nest: {\n            key: value\n        }\n      + nest: str\n    }\n  - group2: {\n        abc: 12345\n        deep: {\n            id: 45\n        }\n    }\n  + group3: {\n        deep: {\n            id: {\n                number: 45\n            }\n        }\n        fee: 100500\n    }\n}';
  const firstpath = `${process.cwd()}/__fixtures__/file1.yaml`;
  const secondpath = `${process.cwd()}/__fixtures__/file2.yml`;
  expect(genDiff(firstpath, secondpath)).toEqual(result);
});

test('gendiff with json file', () => {
  const result = '{\n    common: {\n      + follow: false\n        setting1: Value 1\n      - setting2: 200\n      - setting3: true\n      + setting3: null\n      + setting4: blah blah\n      + setting5: {\n            key5: value5\n        }\n        setting6: {\n            doge: {\n              - wow: \n              + wow: so much\n            }\n            key: value\n          + ops: vops\n        }\n    }\n    group1: {\n      - baz: bas\n      + baz: bars\n        foo: bar\n      - nest: {\n            key: value\n        }\n      + nest: str\n    }\n  - group2: {\n        abc: 12345\n        deep: {\n            id: 45\n        }\n    }\n  + group3: {\n        deep: {\n            id: {\n                number: 45\n            }\n        }\n        fee: 100500\n    }\n}';
  const firstpath = `${process.cwd()}/__fixtures__/file1.json`;
  const secondpath = `${process.cwd()}/__fixtures__/file2.json`;
  expect(genDiff(firstpath, secondpath)).toEqual(result);
});

test('gendiff in plain format', () => {
  const result = [
    "Property 'common.follow' was added with value: false",
    "Property 'common.setting2' was removed",
    "Property 'common.setting3' was updated. From true to null",
    "Property 'common.setting4' was added with value: 'blah blah'",
    "Property 'common.setting5' was added with value: [complex value]",
    "Property 'common.setting6.doge.wow' was updated. From '' to 'so much'",
    "Property 'common.setting6.ops' was added with value: 'vops'",
    "Property 'group1.baz' was updated. From 'bas' to 'bars'",
    "Property 'group1.nest' was updated. From [complex value] to 'str'",
    "Property 'group2' was removed",
    "Property 'group3' was added with value: [complex value]",
  ].join('\n');
  const firstpath = `${process.cwd()}/__fixtures__/file1.json`;
  const secondpath = `${process.cwd()}/__fixtures__/file2.json`;
  expect(genDiff(firstpath, secondpath, 'plain')).toEqual(result);
});
