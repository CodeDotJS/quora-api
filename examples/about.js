'use strict';

const quora = require('../index.js');

quora.about('Adam-DAngelo').then(user => {
	console.log(user);
});
