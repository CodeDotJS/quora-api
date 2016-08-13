'use strict';

const quora = require('../index.js');

quora.activity.answered('Rishi-Giri-1').then(track => {
	console.log(track);
});
