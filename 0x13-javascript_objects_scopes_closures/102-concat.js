#!/usr/bin/node

/**
 * This is a script that concatenates 2 files.
 * The first argument is the file path of the first source file
 * The second argument is the file path of the second source file
 * The third argument is the file path of the destination
 */

const fs = require('fs');
const file1 = process.argv[2];
const file2 = process.argv[3];
const file3 = process.argv[4];
const data1 = fs.readFileSync(file1 + '', 'utf8'); // read first file
const data = data1 + fs.readFileSync(file2 + '', 'utf8'); // read second file and concatenate with first file
fs.writeFileSync(file3 + '', data);
