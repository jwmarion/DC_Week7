var fs = require('fs');
var dns = require('dns');
var request = require('request');
var rl = require('readline');
var cheerio = require('cheerio');

var rl = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a programming language: ', function(domain){
  dns.lookup(domain, function(err,ipAddress){
    if (err){
      console.log(err.message);
      rl.close();
      return;
    }
    else{
      request.get('https://en.wikipedia.org/wiki'+ domain, function(err, response, html){
        if (err){
          console.log(err.message);
          rl.close();
          return;
        }
        else{
          var $ = cheerio.load(html);
          $('.').each(function(i, element){
           var a = $(this).prev();
           console.log(a.text());
          });
        }
      });
    }
});
});
