'use strict';
const express = require('express');
const auth = require('./auth');
const users = require('./users');

function index(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Home',
      page: 'home'
    });
  });

  router.get('/about', function(req, res, next) {
    res.render('about', {
      page: 'about',
      title: 'About'
    });
  });

  return router;
}

module.exports = function(app) {
  app.use('/', index(express.Router()));
  app.use('/', auth(express.Router()));
  app.use('/users', users(express.Router()));
};
