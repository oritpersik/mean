'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Auth, app, auth, database) {

  app.get('/auth/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/auth/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/auth/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/auth/example/render', function(req, res, next) {
    Auth.render('index', {
      package: 'auth'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
