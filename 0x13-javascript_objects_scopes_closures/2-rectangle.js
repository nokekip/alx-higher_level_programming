#!/usr/bin/node
/**
 * checks for parameters
 */
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
    this.width = w;
    this.height = h;
    }
  }
}
module.exports = Rectangle;
