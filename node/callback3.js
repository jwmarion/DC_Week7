var fs = require('fs');
var async = require('async');
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



function transform(file, callback){
  fs.writeFile(file, 'Hello, world!', callback);
}

async.map(filenames, transform ,function(err, fileNames){
  if (err){
    console.log(err);
    return;
  }
  console.log('Written');
});
