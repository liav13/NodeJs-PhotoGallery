var mongoose = require ('mongoose');

mongoose.connect('mongodb://127.0.0.1/photos1',
{ useNewUrlParser: true},
function (err){
    err ? console.log(err) : console.log('Connected.....');
}
);

var photos = new mongoose.Schema({
    name: String,
    path: String
});
var model = mongoose.model('photos',photos);

// new model({
// name:"a",
// path:"b"
// }).save();

module.exports = model;