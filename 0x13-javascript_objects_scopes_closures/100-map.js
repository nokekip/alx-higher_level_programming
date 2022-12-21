#!/usr/bin/node

const list = require('./100-data').list; // Import the list from 100-data.js
const map1 = list.map((x, index) => x * index); // Create a new list with the values multiplied by their index
console.log(list); // Print the original list
console.log(map1); // Print the new list
