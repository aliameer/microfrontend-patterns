require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger-options');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const helpersPatternRouter = require('./routes/helpers');
const baselinePatternsRouter = require('./routes/baseline-patterns');
const serverSidePatternsRouter = require('./routes/server-side-patterns');
const clientSidePatternsRouter = require('./routes/client-side-patterns');
const hybridPatternsRouter = require('./routes/hybrid-patterns');

app.use('/monolith', baselinePatternsRouter);
app.use('/helpers', helpersPatternRouter);
app.use('/server-side', serverSidePatternsRouter);
app.use('/client-side', clientSidePatternsRouter);
app.use('/hybrid', hybridPatternsRouter);

const docsUrl = '/docs';
app.get(['', '/'], (req, res, next) => res.redirect(302, docsUrl));
app.use(
  docsUrl,
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdoc(swaggerOptions), {
    customSiteTitle: 'Microfrontend Patterns',
  })
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
