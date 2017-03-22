var snake = require('./snakes');
var size = 10;

console.log(snake(10, function(err){
  if (err){
    console.log(err.message);
    return;
  }
  console.log(null);
}));
