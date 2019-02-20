// var express = require('express');
// var router = express.Router();
// var Photos = require('../models/Photos');
// var photos = require('../routes/photos');



//  router.get('/:size/:page',function (req,res,next){
//      Photos.find({}, function (err, files) {
//          res.render('photos', {
//            title: 'Express',
//            images: files,
//            size: req.params['size'] || ''
//         }).skip((9*(req.params['page']-1)).limit(9)
//     )});
// });

// router.get('/:size/:page',function (req,res,next){

//     Photos.find({}, function (err, files) {
//           size: req.params['size'] || ''
//         }).skip((9*(req.params['page']-1)).limit(9);
// next();
// }, function (req, res ,next) {
//         res.render('photos', {
//           title: 'Express',
//           images:this.files,
//       });
// }
// });

// module.exports = router;