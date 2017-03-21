var async = require('async');
var fs = require('fs');





var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

function findFiles(dir, files, callback){
  fs.readdir(dir, function(err, pfiles){
    if (err) {
      callback(err);
      return;
    }
    pfiles.forEach(function(b){
      var z=async.filter(pfiles, function(e){
        return(files.indexOf(b) != -1);
      });
     callback(z);
    });

  });

}

findFiles('.',filenames,function(err, result){
  if (err){
    console.log(err);
  }
  console.log(result);
});
