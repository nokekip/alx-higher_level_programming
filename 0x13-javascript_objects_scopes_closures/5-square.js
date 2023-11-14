#!/usr/bin/node
/**
 * class Square inherits from rectangle
 */

const Rectangle = require('./4-rectangle');

class Squre extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}
module.exports = Squre;
