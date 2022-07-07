// TheCatApi documentation https://docs.thecatapi.com/
// example URL for siberian "https://api.thecatapi.com/v1/breeds/search?q=sib"

const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {

  request(url + breedName, (error, response, body) => {

    if (error) {
      callback(error);
      // console.log("Request Failed. Error msg:\n", error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(error,"Breed not found");
    } else {
      callback(error,data[0].description);
      // console.log('Breed Info:', data[0].description);
    }
  });
};



module.exports = { fetchBreedDescription };