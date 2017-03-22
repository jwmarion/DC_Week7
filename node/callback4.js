
var async = require('async');
var fs = require('fs');
var gm = require('gm');

function transform(filename, callback){
  gm(filename)
    .resize(240, 240)
    .write(filename, callback);
}

function resizeDir(dir, callback){
  fs.readdir(dir, function(err, files){
    if (err) {
      callback(err);
      return;
    }
    var z = files.filter(function(e){
      return (e.split('.').pop() === 'png');
    });
    async.map(z,transform,function(err,file){
      if (err){
        callback(err);
        return;
      }
    });
    callback(null);
  });
}

resizeDir('.',function(err, result){
  if (err){
    console.log(err);
    return;
  }
  console.log('complete');
});
