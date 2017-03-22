var request = require('request');
var cheerio = require('cheerio');
var result = [];

request('https://www.npmjs.com/',function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received


  var $ = cheerio.load(body);


  // result.push($('a.type-neutral-1').text().serializeArray());

  $('a.type-neutral-1').each(function(e){
    result.push($(this).text());
  });



  console.log(result);
});

console.log(result);
