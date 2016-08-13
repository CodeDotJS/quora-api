'use strict';

const quora = require('../index.js');

quora.posts('Adam-DAngelo').then(count => {
	console.log(count);
});
