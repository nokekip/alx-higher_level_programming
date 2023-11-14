#!/usr/bin/node

/**
 * prints number of rguments already printed and the new argument value
 */

let count = 0;

exports.logMe = function (item) {
  console.log(count + ': ' + item);
  count++;
};
