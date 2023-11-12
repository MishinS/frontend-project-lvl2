import { dirname } from 'path';
import path from 'node:path';
import fs from 'fs';
import { fileURLToPath } from 'node:url';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

const testFilesFlat = [
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yml'],
];

const testFilesTree = [
  ['fileTree1.json', 'fileTree2.json'],
  ['fileTree1.yaml', 'fileTree2.yaml'],
];

describe('Tests', () => {
  test.each(testFilesFlat)('Flat', (file1, file2) => {
    expect(gendiff(getFixturePath(file1), getFixturePath(file2))).toBe(readFile('./results/flatResult.txt'));
  });
  
  test.each(testFilesTree)('Tree', (file1, file2) => {
    expect(gendiff(getFixturePath(file1), getFixturePath(file2))).toBe(readFile('./results/treeResult.txt'));
  });
  
});
