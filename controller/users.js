'use strict';

module.exports = function(router) {

  /* GET users listing. */
  router.get('/', function(req, res, next) {
    res.send('USERS');
  });

  return router;
};
