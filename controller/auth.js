'use strict';
const passport = require('passport');
const logger = require('../services/logger').create('AuthRoutes');
const User = require('../models').User;
const Helpers = require('./helpers');

module.exports = function(router) {
  /******************************************************************************
   ** REGISTRATION
   ******************************************************************************/
  router.get('/register', Helpers.checkNotAuth, function(req, res) {
    res.render('register', {});
  });

  router.post('/register', Helpers.checkNotAuth, function(req, res) {
    User.register(new User({
      username: req.body.username
    }), req.body.password, function(err, account) {
      if (err) {
        return res.render('register', {
          account: account
        });
      }

      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    });
  });

  /******************************************************************************
   ** LOGIN
   ******************************************************************************/
  router.get('/login', Helpers.checkNotAuth, function(req, res) {
    res.render('login', {
      user: req.user,
      redirectUri: req.query.go,
      page: 'login',
      title: 'Login'
    });
  });

  router.post('/login', Helpers.checkNotAuth, passport.authenticate('local'),
    function(req, res) {
      res.redirect(req.query.go || '/');
    });

  /******************************************************************************
   ** LOGOUT
   ******************************************************************************/
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
};
