const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q='


const fetchBreedDescription = function  (breedName, callback) {
  
  request(`${url}${breedName}`, (error, response, body) => { //retrive the url body via request 
  
    if (error) {
    callback(error); // Print the error if one  //occurred
    } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return callback(`${breedName} does not exsist.`);
    }
    return callback(null, data[0].description);
  }
    
  });
  
};


module.exports = { fetchBreedDescription }
  