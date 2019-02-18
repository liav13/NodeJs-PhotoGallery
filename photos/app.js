var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var sharp = require('sharp');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sizeRouter = require('./routes/size');
var photos = require('./routes/photos');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set the photos folder
app.set('photos', path.join(__dirname + '/public/images'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename : function(req,file,cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// })

// //send the photos to upload folder 
// app.use(multer({
//storage: storage}).single('photo'));

//send the photos to upload folder 
app.use(multer({
  dest: './uploads/'
}).array('photo')

  // , function(req,res,next){
  //   console.log(req.file);
  //   res.render ('index');}
);


app.use(express.static(path.join(__dirname, 'public')));

// Set the upload route 
app.get('/upload', photos.getUploadForm);
app.post('/upload', photos.uploadImage(app.get('photos')));


app.use('/', indexRouter);
app.use('/size', sizeRouter);
app.use('/users', usersRouter);

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

const fs = require('fs');
var folders = ["100", "200", "300","400"];
folders.forEach(function (folder) {
  if (!fs.existsSync(path.join(app.get('photos'), folder))) {
    fs.mkdirSync(path.join(app.get('photos'), folder));
  }
});

module.exports = app;
