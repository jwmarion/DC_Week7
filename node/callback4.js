
var async = require('async');
var fs = require('fs');
var gm = require('gm');


var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var requestOptions = {
  url: url,
  encoding: null
};


function transform(filename, callback){
  gm(filename)
    .resize(240, 240)
    .write(filename, function(err) {
      if (err) {
      callback(err);
      console.log('no');
        return;
      }
      console.log('yes');
      callback(null,filename);
  });
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
  });
}

resizeDir('.',function(err, result){
  if (err){
    console.log(err);
    return;
  }
  console.log(result);
});
