const request = require('request');
const args = process.argv.slice(2);



request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => { //retrive the url body via request
  console.log('error:', error); // Print the error if one  //occurred
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    return console.log(`${args[0]} does not exsist.`);
  }
  console.log(data[0].description);
  return;
  
});

  