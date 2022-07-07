// TheCatApi documentation https://docs.thecatapi.com/
// example URL for siberian "https://api.thecatapi.com/v1/breeds/search?q=sib"

const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/search?q=" + (process.argv[2].slice(0, 4))

request(url, (error, response, body) => {

  if (error) {
    console.log("Request Failed. Error msg:\n", error)
    return
  } 
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found")
  } else {
    console.log('Breed Info:', data[0].description);
  }
})
