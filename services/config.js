'use strict';

const config = require('config');

config.env = function() {
  return process.env.NODE_ENV;
};

module.exports = config;
