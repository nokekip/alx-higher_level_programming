#!/usr/bin/node

/**
 * import list from the file 100-data.js and create new list with each value equal to the value of the initial list, multipled by the index in the list
 */

const list = require('./100-data').list; // Import the list from 100-data.js
const map1 = list.map((value, index) => value * index); // Create a new list with the values multiplied by their index
console.log(list); // Print the original list
console.log(map1); // Print the new list
