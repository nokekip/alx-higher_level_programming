#!/usr/bin/node
/**
 * Script that imports an array and computes a new array.
 */
const dict = require('./101-data').dict; // Import dict from 101-data.js
const newDict = {}; // Create an empty object
for (const key in dict) { // Loop through dict
  if (newDict[dict[key]] === undefined) { // If the key doesn't exist
    newDict[dict[key]] = []; // Create an empty array
  }
  newDict[dict[key]].push(key); // Add key to the array
} // Loop through dict and add key to newDict
console.log(newDict); // Print the new object
