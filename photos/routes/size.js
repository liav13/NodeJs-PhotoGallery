var express = require('express');
var router = express.Router();
var Photos = require('../models/Photos');
var photos = require('../routes/photos');

/* GET home page. */

router.get('/:size/:page',function (req,res,next){
    Photos.find({},
      null,
      {limit: 9, skip: 9*(req.params.page-1)},
      function (err, files) {
        console.log('Database cleard');
        res.render('photos', {
          title: 'Express',
          images: files,
          size: req.params['size'] || '',
          page: req.params['page']
        });
      });
});



module.exports = router;