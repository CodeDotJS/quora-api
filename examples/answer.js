'use strict';

const quora = require('../index.js');

quora.answer('What-is-JavaScript').then(answer => {
	console.log(answer);
});
