'use strict';

const quora = require('../index.js');

quora.profileImage('Rishi-Giri-1').then(image => {
	console.log(image);
});
