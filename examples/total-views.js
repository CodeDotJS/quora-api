'use strict';

const quora = require('../index.js');

quora.totalViews('Rishi-Giri-1').then(count => {
	console.log(count);
});
