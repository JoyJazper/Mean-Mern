var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//new edit
var path = require('path');
var fs = require('fs');
//var helmet = require('helmet');
//app.use(helmet());

app.use(express.static('../myWebpage/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../myWebpage/'));
    // res.send('Get Request!')
})

function readFile( url ){
    fs.readFile(url, 'utf8', function( err, data ){
        if ( err ) {
            console.log( 'error', err );
        } else {
            console.log('file read');
            return data;
        }
    });
}

function saveFile( url, body ){
    fs.writeFile(url, body, (err) => {
        if (err) {
            console.log('Error saving');
            throw err;
        } else {
            console.log('It\'s saved!');
        }
    });
}

module.exports = app;
