#!/usr/bin/env node

import { Command } from 'commander';
import getDiffString from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>', 'enter path to file 1')
  .argument('<filepath2>', 'enter path to file 2')
  .action((filepath1, filepath2) => {
    const diff = getDiffString(filepath1, filepath2);  	
    console.log(diff);
  });
 
 
program.parse();	
