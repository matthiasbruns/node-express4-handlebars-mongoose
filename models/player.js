'use strict';

/**
 * This model class stores data for the player.
 * It holds the player's steam profile and common data like the last username.
 * This model uses mongoose and its Schema.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var playerSchema = new Schema({
  steamId: {
    'type': String,
    'required': true,
    'unique': true
  },
  username: {
    'type': String,
    'required': true
  }
}, {
  timestamps: true
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;
