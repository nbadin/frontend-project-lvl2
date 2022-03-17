#!/usr/bin/env node
import { Argument, Command } from 'commander';
const program = new Command

program
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format', '<type>  output format')
  
program.parse(process.argv);