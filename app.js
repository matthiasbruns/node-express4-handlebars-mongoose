'use strict';

const logger = require('./services/logger').create('App');
const config = require('./services/config');

const express = require('express');
const expressValidator = require('express-validator');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const i18n = require('i18n');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const controllers = require('./controller');
const models = require('./models');

// sets global Promise to bluebird
global.Promise = Promise = require("bluebird");

logger.debug('Loaded config for env: "%s"', config.env());

/******************************************************************************
 ** EXPRESS
 ******************************************************************************/
i18n.configure({
  locales: ['en', 'de'],
  cookie: 'locale',
  directory: "" + __dirname + "/i18n"
});

/******************************************************************************
 ** EXPRESS
 ******************************************************************************/
var app = express();
var sessionStore = new session.MemoryStore();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  cookie: {
    maxAge: 60000
  },
  store: sessionStore,
  saveUninitialized: true,
  resave: 'true',
  secret: config.get('sessionSecret')
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(i18n.init);

/******************************************************************************
 ** MODELS
 ******************************************************************************/
models.init(config.get('database'));

/******************************************************************************
 ** PASSPORT
 ******************************************************************************/
app.use(passport.initialize());
app.use(passport.session());

var User = models.User;
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*-------------------------------------------------
 * GLOBAL TEMPLATE VARS
 *-----------------------------------------------*/
app.use('/', function(req, res, next) {
  res.locals.user = req.user;
  next();
});

/******************************************************************************
 ** ROUTES
 ******************************************************************************/
controllers(app);

/******************************************************************************
 ** HANDLEBARS
 ******************************************************************************/
var hbs = exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    __: function() {
      return i18n.__.apply(this, arguments);
    },
    __n: function() {
      return i18n.__n.apply(this, arguments);
    },
    ifEq: function(a, b, opts) {
      if (a === b)
        return opts.fn(this);
      else
        return opts.inverse(this);
    }
  }
});

app.engine('.hbs', hbs);
app.set('view engine', '.hbs');

/******************************************************************************
 ** ERROR HANDLING
 ******************************************************************************/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (config.env() === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
