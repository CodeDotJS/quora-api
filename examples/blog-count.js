'use strict';

const quora = require('../index.js');

quora.blogCount('Adam-DAngelo').then(count => {
	console.log(count);
});
