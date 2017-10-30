require('babel-register')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookiesMiddleware = require('universal-cookie-express');
var sassMiddleware = require('node-sass-middleware');
var favicon = require('serve-favicon');

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

var index = require('./routes/index');
var users = require('./routes/users');
var dbconfig = require('../config/').database.config.production;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookiesMiddleware());
app.use(sassMiddleware({
  src: path.join(__dirname, '..', 'public'),
  dest: path.join(__dirname, '..', 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Creating DB Connection
var connection = new Connection(dbconfig);

// DB Insert function
// Takes a callback that returns error or if successful, inserted row ID
const Insert = (data, callback) => {
  var ID;

  request = new Request(
    'INSERT results (intAge, vchGender, vchIndustry, vchCountry, intPostcode, vchEmail, vchResultProfile, vchResultJSON, intResultIntrinsic, intResultInstrumental, intResultSelf, intResultOther, vchRefCode) OUTPUT INSERTED.intResultID VALUES (@Age, @Gender, @Industry, @Country, @Postcode, @Email, @Profile, @Result, @Intrinsic, @Instrumental, @Self, @Other, @Reference)',
    function (err, rowCount) {
      if (err) {
        callback(err);
      } else {
        console.log(rowCount + ' row(s) updated');
        callback(null, rowCount, ID);
      }
  });
  request.addParameter('Age', TYPES.Int, data.age);
  request.addParameter('Gender', TYPES.VarChar, data.gender);
  request.addParameter('Industry', TYPES.VarChar, data.industry);
  request.addParameter('Country', TYPES.VarChar, data.country);
  request.addParameter('Postcode', TYPES.Int, data.postcode);
  request.addParameter('Email', TYPES.VarChar, data.email);
  request.addParameter('Profile', TYPES.VarChar, data.profileName);
  request.addParameter('Result', TYPES.VarChar, JSON.stringify(data.valueMappings));
  request.addParameter('Intrinsic', TYPES.Int, data.intrinsic);
  request.addParameter('Instrumental', TYPES.Int, data.instrumental);
  request.addParameter('Self', TYPES.Int, data.self);
  request.addParameter('Other', TYPES.Int, data.other);
  request.addParameter('Reference', TYPES.VarChar, data.reference);
  request.on('row', function (columns) {
    columns.forEach(function (column) {
      if (column.value !== null) {
        ID = column.value;
      }
    });
  });
  connection.execSql(request);
};

connection.on('connect', (err) => {
  console.log('Connecting...');
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});
connection.on('error', (err) => {
  console.log(err);
  connection.close();
});
connection.on('end', () => {
  console.log('Connection closed.');
});

// Listen to POST requests on /results
// These are form submission requests from React
// We use Tedious (SQL Server Driver) to perform DB inserts
app.post('/results', function(req, res) {
  var data = req.body;
  console.log('POST received');
  Insert(data, (err, rowCount, insertedID) => {
    if (err) {
      res.status(500).send({
          succes: false,
          error: err
        });
    } else {
      res.send({
        success: true,
        rowCount,
      });
    }
  });
});


app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
