var _ = require('lodash');


deck = [];
while(deck.length < 10){
  deck.push(_.random(-100,100));
}

console.log('Your hand: ' + deck);
console.log('Top Value: ' + _.max(deck));
console.log('Average value: ' +_.floor( _.mean(deck)));
console.log('Combined value: '+ _.sum(deck));

console.log('All positive: '+(_.map(deck,function(e){
  if(e <= 0){
    return (e * -1);
  }
  else{return e;}
})));


console.log('Shuffled: '+_.shuffle(deck));
