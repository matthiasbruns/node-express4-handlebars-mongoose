'use strict';

var pine = require('pine');

module.exports = {
  default: function() {
    return pine();
  },
  create: function(name) {
    name = name ||  '';
    return pine(name.toUpperCase());
  }
};
