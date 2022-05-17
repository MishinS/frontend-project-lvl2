import { readFileSync } from 'fs';
import path from 'path';
import genDiff from './makingDiff.js';
import parsingFile from './parsingFile.js';
import simpleFormatted from './formatted/simple.js';








const isReadingFile = (filepath) => readFileSync(filepath, 'utf-8', (err) => {
    if (err) {
        console.log(err)
    }
});

const getExtensionFile = (fileName) => path.extname(fileName);

const getDiffString = (path1, path2) => {
    const parsedFile1 = parsingFile(isReadingFile(path1), getExtensionFile(path1)); 
    const parsedFile2 = parsingFile(isReadingFile(path2), getExtensionFile(path2));

    const diff = genDiff(parsedFile1, parsedFile2);
return simpleFormatted(diff);

};

export default getDiffString;
