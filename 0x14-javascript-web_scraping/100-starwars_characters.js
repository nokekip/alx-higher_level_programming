#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('An error occurred:', error);
    return;
  }

  const movie = JSON.parse(body);
  const characterUrls = movie.characters;

  characterUrls.forEach((url, index) => {
    request(url, (error, response, body) => {
      if (error) {
        console.error('An error occurred:', error);
        return;
      }

      const character = JSON.parse(body);
      console.log(character.name);
    });
  });
});
