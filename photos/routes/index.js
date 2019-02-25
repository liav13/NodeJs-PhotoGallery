var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var photos = require('../routes/photos');

/* GET home page. */

router.get('/', photos.listImages);



module.exports = router;