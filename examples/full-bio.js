'use strict';

const quora = require('../index.js');

quora.fullBio('Rishi-Giri-1').then(fullBiography => {
	console.log(fullBiography);
});
