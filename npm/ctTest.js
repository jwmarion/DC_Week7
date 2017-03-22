var create = require('./create');
var dir = './images/';
create(dir, function(err){
  if (err){
    console.log(err.message);
    return;
  }
  console.log('It worked');
});
