var express = require('express');
var router = express.Router();
var Photos = require('../models/Photos');
var photos = require('../routes/photos');

/* GET home page. */

router.get('/:size',function (req,res,next){
    Photos.find({}, function (err, files) {
        console.log('Database cleard');
        res.render('photos', {
          title: 'Express',
          images: files,
          size: req.params['size'] || ''
        });
      });
});



module.exports = router;