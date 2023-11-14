#!/usr/bin/node
/**
 * Creates empty object if the parameters equals zero
 */
class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) return;
    this.width = w;
    this.height = h;
  }

  /**
   * method that prints rectangle using Character 'X
   */
  print () {
    for (let i = 0; 1 < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }
}
module.exports = Rectangle;
