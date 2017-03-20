var x = 4;
var y = 3;

function square(num,callback){
   callback(num  * num);
}

function squareRoot(num, callback){
  callback(Math.sqrt(num));
}



square(x, function(x2){
  square(y, function(y2){
    squareRoot(x2+y2, function(e){
      console.log(e);
    });

  });

});
