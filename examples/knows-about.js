'use strict';

const quora = require('../index.js');

quora.knowsAbout('Adam-DAngelo').then(user => {
	console.log(user);
});
