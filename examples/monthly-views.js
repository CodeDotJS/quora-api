'use strict';

const quora = require('../index.js');

quora.monthlyViews('Rishi-Giri-1').then(user => {
	console.log(user);
});
