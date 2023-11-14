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
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  /**
   * swaps the width and height
   */
  rotate () {
    const temporary = this.width;
    this.width = this.height;
    this.height = temporary;
  }

  /**
   * multiplies width and height by 2
   */
  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
module.exports = Rectangle;
