'use strict';
/**
 * Helper class that initializes the mongoose/mongodb connection and
 * also adds the other model class.
 */

const mongoose = require('mongoose');
const logger = require('../services/logger').create('Models');

mongoose.Promise = require('bluebird');

module.exports = {
  init: function(config) {
    var url;
    if (config.user && config.password) {
      url = 'mongodb://' +
        config.user + ':' + config.password + '@' +
        config.host + '/' + config.db;
    } else {
      url = 'mongodb://' + config.host + '/' + config.db;
    }
    mongoose.connect(url, function(err) {
      if (err) {
        logger.error('Could not connect to database %s on %s', config.db,
          config.host);
      } else {
        logger.info('Connected to databse %s', config.db);
      }
    });
  }
};

module.exports.User = require('./user');
module.exports.Player = require('./player');
