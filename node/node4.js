var fs = require('fs');
var dns = require('dns');
var request = require('request');
var rl = require('readline');

var rl = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a domain name: ', function(domain){
  dns.lookup(domain, function(err,ipAddress){
    if (err){
      console.log(err.message);
      rl.close();
      return;
    }
    else{
      rl.question('Where to save the file?: ', function(filename){
        request.get('http://'+domain, function(err, response, html){
          if (err){
            console.log(err.message);
            rl.close();
            return;
          }
          else{
            fs.writeFile(filename, html, function(err){
              if(err){
                console.log(err.message);
                return;
              }
              else{
                console.log("File written");
                rl.close();
              }
            });
          }
        });
      });
    }
  });
});
