var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a file to open: ', function(input){
  rl.question('Enter a file to save to: ', function(output){
    fs.readFile(input, function(err,buffer){
      if (err){
        console.log(err.message);
        rl.close();
        return;
      }
      else {
        fs.writeFile(output,buffer.toString().toUpperCase(), function(err){
          if (err){
            console.log(err.message);
            rl.close();
            return;
          }
          else{
            console.log("Wrote to " + output);
          }
          rl.close();
        });
      }
    });
  });
});
