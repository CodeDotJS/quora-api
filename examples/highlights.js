'use strict';

const quora = require('../index.js');

quora.highlights('Adam-DAngelo').then(user => {
	console.log(user);
});
