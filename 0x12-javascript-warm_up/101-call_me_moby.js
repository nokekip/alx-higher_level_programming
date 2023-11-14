#!/usr/bin/node
module.exports = {
  callMeMoby: function (n, funct) {
    for (let i = 0; i < n; i++) {
      funct();
    }
  }
};
