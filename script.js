'use strict';
// DECLARE DOM VARIABLES
const headline = document.querySelector('h1');
const button = document.querySelector('button');

// BUTTON FUNCTION
button.addEventListener('click', function (e) {
  headline.textContent = 'Hello World!';
});
