var fs = require('fs');
var gm = require('gm');

gm('js.png')
  .resize(240,240)
  .write('thumbnail.png', function(err){
    if (err){
      console.log(err.message);
      return;
    }

  });



// var options = {
//   url: 'http://example.com/example.png',
//   encoding: null
// };
// request(options, function(err, response, imageData) {
//   // save image data and resize
// });
