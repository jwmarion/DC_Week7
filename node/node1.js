

var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var filename = '';

rl.question('Enter a file name: ',function(file){
  filename = file;
  fs.readFile(filename, function(err,buffer){
    if (err){
      console.log(err.message);
      rl.close();
      return;
    }
    else{
      console.log(buffer.reverse().toString().toUpperCase());
    }
  });
});
