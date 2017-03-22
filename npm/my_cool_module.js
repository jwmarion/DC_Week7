var request = require('request');
var fs = require('fs');

var my_cool_module = require('./my_cool_module');

function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}

exports.saveWebPage = saveWebPage;


var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
my_cool_module.saveWebPage(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
