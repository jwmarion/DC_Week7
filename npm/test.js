var my_cool_module = require('./my_cool_module');
var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
my_cool_module.saveWebPage(url,filename, function(err){
  if (err){
    console.log(err.message);
    return;
  }
  console.log('It worked');
});
