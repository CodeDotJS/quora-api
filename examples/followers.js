'use strict';

const quora = require('../index.js');

quora.followers('Adam-DAngelo').then(user => {
	console.log(user);
});
