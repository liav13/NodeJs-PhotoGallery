var Photos = require('../models/Photos');
var path = require('path');
var fs = require('fs');
var join = path.join;
const sharp = require('sharp')

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
  res.redirect('/home')
  //  res.render('photos', {
  //   title: 'Express',
  //   images: files,
  //   size: req.params['size'] || '',
  //   page: 0
  // });
  });
}
function uploadImage(dir) {
  return function (req, res, next) {


    //read photos names
    // let myUploadNames = fs.readdirSync('uploads');
    // console.log(myUploadNames);

    // Get the number of images
    var counter = req.files.length;

    // Loop on all images
    req.files.forEach(function (file, index, array) {

      // Rename image
      fs.rename(file.path, path.join(dir, file.originalname),
        function (err) {
          if (err) throw err;

          // add image to db
          Photos.create({
            name: file.originalname,
            path: file.originalname
          }, function (err, data) {
            var folders = ["100", "200", "300", "400"];
            folders.forEach(function (folder) {
              sharp(path.join(dir, file.originalname))
                .resize(parseInt(folder),parseInt(folder))
                .toFile(path.join(dir, folder, file.originalname))
                .then(data => {
                })
            });
            // update the counter for the remaining images
            --counter;

            if (counter === 0) {
              redirectToHome(res);
            }
          });
        });

    });

  }
};

function redirectToHome(res) {
  Photos.find({}, function (err, images) {
    console.log(images)
    // res.render('photos', {
    //   title: 'uploads',
    //   images: images
    // });
    res.redirect('/');
  })
  

}


// Expose the public methods
module.exports = {
  listImages: listImages,
  uploadImage: uploadImage,
  getUploadForm: getUploadForm
};
