var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a domain name: ', function(domain) {
  dns.lookup(domain, function(err,ipAddress){
    if (err){
      console.log(err.message);
      rl.close();
      return;
    }
    console.log('Domain name: '+domain+ '\n '+'IP address: ' +ipAddress);
    rl.close();
  });
});
