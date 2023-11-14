#!/usr/bin/node

/**
 * Returns number of occurence in a list
 */

exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  for (const item in list) {
    if (list[item] === searchElement) {
      count++;
    }
  }
  return count;
};
