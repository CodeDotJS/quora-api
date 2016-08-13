'use strict';

const quora = require('../index.js');

quora.answer.user('What-was-the-first-program-Adam-DAngelo-wrote/answer/Adam-DAngelo').then(answer => {
	console.log(answer);
});
