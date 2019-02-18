// var express = require('express');
// var router = express.Router();


// var fs = require('fs');
// var path = require('path');
// /* GET home page. */

// router.get('/', function (req, res, next) {

//  // localStorage.setItem('myDate', Date.now);

//   console.log(__dirname)
 
//   fs.readdir(path.join(__dirname, '/../public/images'),
//     function (err, files) {
//       if (err) {
//         throw err;
//       }
//       console.log(err);
//       console.log(files);
      
//       res.render('photos', {
//         title: 'Express',
//         images: files
//       });  
      
      
//     })

  
// });

// module.exports = router;
var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var photos = require('../routes/photos');

/* GET home page. */

router.get('/', photos.listImages);



module.exports = router;