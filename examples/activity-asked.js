'use strict';

const quora = require('../index.js');

quora.activity.asked('Rishi-Giri-1').then(track => {
	console.log(track);
});
