var Photos = require('../models/Photos');
var path = require('path');
var fs = require('fs');
var join = path.join;
const sharp = require ('sharp')

// Function to get the upload form
function getUploadForm(req, res, next) {
  res.render('upload', {
    title: 'Photo upload form'
  });
};

function listImages(req, res, next) {
  //   fs.readir({});
  Photos.find({}, function (err, files) {
    console.log('Database cleard');
    res.render('photos', {
      title: 'Express',
      images: files
    });
  });
}
function uploadImage(dir) {
  return function (req, res, next) {

    //read photos names
    // let myUploadNames = fs.readdirSync('uploads');
    // console.log(myUploadNames);


    // Rename image
    fs.rename(req.file.path, path.join(dir, req.file.originalname))
    // add image to db
    Photos.create({
      name: req.file.originalname,
      path: req.file.originalname
    });
    console.log(req.file);
    Photos.find({}, function (err, images) {
      console.log(images)
      res.render('photos', { title: 'aaa', images: images });
    })
    // resize
//     sharp('req.file.originalname').resize(200).toFile(req.file.path, path.join(dir, req.file.originalname));
//     sharp();
 }
  
};

// Expose the public methods
module.exports = {
  listImages: listImages,
  uploadImage: uploadImage,
  getUploadForm: getUploadForm
};
