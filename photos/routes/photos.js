var Photos = require('../models/Photos');
var path = require('path');
var fs = require('fs');
var join = path.join;

// Function to get the upload form
function getUploadForm(req, res, next) {
    res.render('upload', {
      title: 'Photo upload form'
    });
  };

  function listImages(req, res, next){
    //   fs.readir({});
    Photos.find({}, function (err, files) {
        console.log('Database cleard');
        res.render('photos', {
          title: 'Express',
          images: files
        });
      });
  }
  function uploadImage(dir){
    return function(req,res,next){
      // Rename image
      // add image to db
      console.log(req.file);
      res.render('index',{title:'aaa'});
    }
  }
  // Expose the public methods
  module.exports = {
    listImages: listImages,
    uploadImage: uploadImage,
    getUploadForm: getUploadForm
  };  
  