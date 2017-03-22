

function makeSnake(size, callback){
  var arr = [];
  for (var i = 0; i < size; i++){
    arr.push('««');
  }
  arr.push("ºº>");
  var a =arr.reduce(function(a,b){
    return(a+b);
  });
  return a;
}

module.exports = makeSnake;
