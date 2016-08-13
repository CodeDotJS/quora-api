'use strict';

const quora = require('../index.js');

quora.answer.count('What-is-JavaScript').then(count => {
	console.log(count);
});
