var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var logger = require('morgan');
var methodOverride = require('method-override');


// load the env vars
require('dotenv').config();
// console.log(process.env.MYSECRET)
require('./config/database');
require('./config/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var blogRouter = require('./routes/blog');
var commentsRouter = require('./routes/comments');

// var blogPostsRouter = require('./routes/blog/blogPosts');
var coursesRouter = require('./routes/courses');
// var liveCourseRouter = require('./routes/courses/live');
// var onDemandRouter = require('./routes/courses/onDemand');
// var workshopsRouter = require('./routes/courses/workshops');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// new code below
app.use(session({
  secret: 'SageMoves',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/blog', blogRouter);
app.use('/courses', coursesRouter);
app.use('/', commentsRouter);

// app.use('/courses/live', liveCourseRouter);
// app.use('/courses/onDemand', onDemandRouter);
// app.use('/courses/workshops', workshopsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;