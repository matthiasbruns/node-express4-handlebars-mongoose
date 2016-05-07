'use strict';

var Helpers = {};

Helpers.checkNotAuth = function checkNotAuth(req, res, next) {
  // Make sure user is NOT logged-in yet
  if (req.user) return res.redirect('/');
  next();
};

Helpers.checkAuth = function checkAuth(req, res, next) {
  // Middleware which makes sure the user is authenticated
  if (req.user) return next();
  res.redirect('/login?go=' + req.originalUrl);
};

Helpers.handleExpressValidator = function handleExpressValidator(errors) {
  var flashErrors = [];
  for (var i = 0; i < errors.length; i++) {
    flashErrors.push(errors[i].msg);
  }
  return flashErrors;
};

module.exports = Helpers;
