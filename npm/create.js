var fs = require('fs');
var gm = require('gm');
var async = require('async');
// var createThumbnails = require('./create.js');

function resizeImage(filename, callback) {
  gm(filename)
    .resize(240, 240)
    .write(filename, callback);
}

function createThumbnails(dir){
  fs.readdir(dir, function(err, files) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('before', files);
    files = files.map(function(filename) {
      return dir + filename;
    });
    console.log('after', files);
    async.each(files, resizeImage, function(err) {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('It worked.');
    });
  });
}
module.exports = createThumbnails;
// exports.createThumbnails = createThumbnails;
