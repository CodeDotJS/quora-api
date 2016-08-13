'use strict';

const quora = require('../index.js');

quora.publicAnswers('Adam-DAngelo').then(answers => {
	console.log(answers);
});
