var request = require('request');
var fs = require('fs');

// var url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
// var filename = 'output.html';

// request.get(url, function(err, response, html) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   fs.writeFile(filename, html, function(err) {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log('It worked');
//   });
// });
function callBack(err, result){
  // debugger
  if (err){
    console.log(err);
    return;
  }
  console.log('it worked');
}


function saveWebPage(url, filename, callback){
  request.get(url, function(err, response, html) {
    if (err) {
      console.log('test');
      callback(err);
    }
    fs.writeFile(filename, html, callback);
  });
}

// , callBack(null, html)

saveWebPage('https://en.wikipedia.org/wiki/Continuation-passing_style', 'output.txt', callBack);
