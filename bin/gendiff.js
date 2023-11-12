#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .action((pathFile1, pathFile2, options) => {
    const formatType = options.format;
    const result = genDiff(pathFile1, pathFile2, formatType);
    console.log(result);
  })
  .option('-f, --format [type]', 'output format', 'stylish')
  .parse(process.argv);
