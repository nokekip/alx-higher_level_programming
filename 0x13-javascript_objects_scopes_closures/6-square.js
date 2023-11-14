#!/usr/bin/node

/**
 * inherits from class Square
 * charPrint(c) : - prints the rectangle usind the character 'c'.
 *                - if undefined, uses character 'X'.
 */

const BaseSquare = require('./5-square');

class Square extends BaseSquare {
  // Method to Print  the rectangle
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.width; i++) {
        console.log(c.repeat(this.height));
      }
    }
  }
}
module.exports = Square;
