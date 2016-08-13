'use strict';

const quora = require('../index.js');

quora.edits('Rishi-Giri-1').then(count => {
	console.log(count);
});
