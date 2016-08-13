'use strict';

const quora = require('../index.js');

quora.bio('Adam-DAngelo').then(biography => {
	console.log(biography);
});
