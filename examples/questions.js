'use strict';

const quora = require('../index.js');

quora.questions('Adam-DAngelo').then(count => {
	console.log(count);
});
