'use strict';

const quora = require('../index.js');

quora.following('Adam-DAngelo').then(count => {
	console.log(count);
});
