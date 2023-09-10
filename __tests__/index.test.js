import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const getResult = (fileName) => fs.readFileSync(
  `./__tests__/__fixtures__/results/${fileName}`,
  'utf-8',
).trim();

const relativePathTo = (fileName, ext) => `./__tests__/__fixtures__/${ext}/${fileName}`;
const absolutePathTo = (fileName, ext) => path.join(__dirname, '__fixtures__', ext, fileName);
const testFiles = [
  ['after.json', 'before.json', 'json'],
  ['after.yml', 'before.yml', 'yml'],
];

describe('Flat', () => {
  test.each(testFiles)('%s format:', (file1, file2, ext) => {
    expect(gendiff(
      absolutePathTo(file1, ext),
      relativePathTo(file2, ext),
    ))
      .toBe(getResult('resultFlat.txt'));
  });
});

describe('Tree', () => {
  test('JSON format', () => {
    expect(gendiff(
      relativePathTo('afterTree.json', 'json'),
      relativePathTo('beforeTree.json', 'json'),
      'stylish',
    ))
      .toBe(getResult('resultTree.txt'));
  });
});

describe('Plain', () => {
  test('JSON format', () => {
    expect(gendiff(
      relativePathTo('afterTree.json', 'json'),
      relativePathTo('beforeTree.json', 'json'),
      'plain',
    ))
      .toBe(getResult('resultPlainTree.txt'));
  });
});

describe('JSON', () => {
  test('JSON format', () => {
    expect(gendiff(
      absolutePathTo('afterTree.json', 'json'),
      absolutePathTo('beforeTree.json', 'json'),
      'json',
    ))
      .toBe(getResult('result.json'));
  });
});
// absolutePathTo
