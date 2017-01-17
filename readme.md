<h1 align="center">
	<br>
	<img width="350" src="https://raw.githubusercontent.com/CodeDotJS/quora-api/master/media/quora.png">
	<br>
</h1>

> :boom: :book: :boom: An unofficial API for Quora.

[![Build Status](https://travis-ci.org/CodeDotJS/quora-api.svg?branch=master)](https://travis-ci.org/CodeDotJS/quora-api)
![code-style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)

__NOTE :__ Quora changes its UI almost every day. They make changes, they revert it back. This is what they are doing.
This code worked very well on old structure, but now some of the feature aren't working well. Also, Quora removed few sections
like `Highlights` and `Views` but this api contains that part which is quite useless at this point of time.

## Install

```
$ npm install --save quora-api
```

## Usage

### __`PART 1`__ ` : ` __`STATS`__

### › `Basic Information : ` __`quora()`__

__`accepts : username`__

```js
'use strict';

const quora = require('quora-api');

quora('Adam-DAngelo').then(user => {
	console.log(user);
     /*
	{ profilePicture: 'https://qph.ec.quoracdn.net/...yqigr.jpeg',
	  biography: 'Quora CEO',
      fullBio: null,
      publicAnswers: '956',
      questions: '951',
      posts: '60',
      followers: '160,138',
      following: '619',
      edits: '21,076',
      monthlyViews: '383,356',
      totalViews: '16,488,317' }
    */
});
```

### › __`Knows About : `__ __`quora.knowsAbout()`__

__`accepts : username`__

```js
quora.knowsAbout('Adam-DAngelo').then(user => {
	console.log(user);
	/*
	{ knowsAbout1: 'Startups',
	answers1: '63',
	endorsement1: '95',
	knowsAbout2: 'Quora (company)',
	answers2: '37',
	endorsement2: '268',
	knowsAbout3: 'California Institute of Technology',
	answers3: '9',
	endorsement3: '48' }
	*/
});
```

### › __`Highlights : `__ __`quora.highlights()`__

__`accepts : username`__

```js
quora.hightlights('Adam-DAngelo').then(info => {
	console.log(user);
	/*
	{ info1: 'Top Writer',
  	  part1: '2016, 2015, 2014, and 2013',
  	  info2: 'Knowledge Prize Winner',
  	  part2: 'Insert a dynamic date here',
  	  info3: 'Published Writer',
  	  part3: 'Forbes',
  	  info4: 'Most Viewed Writer',
  	  part4: ' Palo Alto, CA,  Quora,  California Institute of Technology, and 29 more' }
  	*/
});
```

### __`PART 2`__ ` : ` __`BLOGS & ANSWERS`__

### › __`General answers : `__ __`quora.answer()`__

__`accepts : question`__ ` [without https://quora.com/]`

__`answer's count : 5 (max)`__

```js
quora.answer('What-is-JavaScript').then(answer => {
	console.log(answer);
	/*
	{ answer0: 'Well, when you go to a.....case of AJAX calls, etc',
	  writer0: 'Josh Beam',
	  answer1: 'Your intuition about Javascript.....great JS codes',
	  writer1: 'Justen Robertson',
	  answer2: 'As stated in this..... page JavaScript: JavaScript',
	  writer2: 'Yassine Alouini',
	  answer3: 'JavaScript is a prog.... JSalert(\'Hello, world!\');'
	  writer3: 'Faizaan Mohammed';
	  answer4: 'I strongly suggest you to read.....ES6 and Beyond.',
	  writer4: ''Kim Gysen' }
	/*
});
```

### › __`User's answer : `__ __`quora.answer.user()`__

__`accepts : question along with writer's name`__

```js
quora.answer.user('What-was-the-first-program-Adam-DAngelo-wrote/answer/Adam-DAngelo').then(answer => {
	console.log(answer);
	/*
	{ answer: 'I'm not sure if I remember exactly. . . about programming' }
	/*
});
```

### › __`Total answers on a question : `__ __`quora.answer.count()`__

__`accepts : question`__

```js
quora.answer.count('Where-do-Congressmen-and-Senators-live-when-they-are-in-DC').then(count => {
	console.log(count);
	// { count: '8 Answers' }
});
```

### › __`User's total blog : `__ __`quora.blogCount()`__

__`accepts : username`__

```js
quora.blogCount('Adam-DAngelo').then(count => {
	console.log(count);
	// { blog: '16 Blogs' }
});
```

### __`PART 3`__ ` : ` __`USER's ACTIVITIES`__

### › __`Track last 5 activities : `__ __`quora.activity()`__

__`accepts : username`__

```js
quora.activity('Adam-DAngelo').then(track => {
	console.log(track);
	/*
	{ question0: 'Where do Congressmen and Senators live when they are in DC?',
	  action0: '  Adam D\'Angelo upvoted this · 18h ago',
	  .
	  .
	  question4: 'Is service (at restaurants, stores, taxis, etc.) good or bad in Israel?',
	  action4: 'Adam D\'Angelo upvoted this · 1d ago' }
	*/
});
```

__`››`__  You can also use :

__`›`__ __`quora.activity.asked(username) : `__ ` last 5 questions asked by an user`

```js
quora.activity.asked(username).then(data => {
	console.log(data);
	// => get data
});
```

__`›`__ __`quora.activity.answered(username) : `__ ` last 5 questions answered by an user`

```js
quora.activity.answered(username).then(data => {
	console.log(data);
	// => get data
});
```

## Options

__`››`__ Datas of section __`"Basic Information"`__ can also be scrapped individually

__`›`__ __`quora.profileImage(username)`__  `: get username of a quora user`

__`›`__ __`quora.bio(username)`__  `: get initial biography`

__`›`__ __`quora.fullBio(username)`__  `: get complete biography`

__`›`__ __`quora.publicAnswers(username)`__  `: total publically answered question's count`

__`›`__ __`quora.questions(username)`__  `: total publically asked questions's count`

__`›`__ __`quora.posts(username)`__  `: total blog posts made`

__`›`__ __`quora.followers(username)`__  `: total number of followers`

__`›`__ __`quora.following(username)`__  `: total following`

__`›`__ __`quora.edits(username)`__  `: total edits made by a user`

__`›`__ __`quora.monthlyViews(username)`__  `: views generated on user's answer - monthly`

__`›`__ __`quora.totalViews(username)`__  `: views generate on user's answers - all time`


- __`username`__

`TYPE : ` `string`

## Contributing

Feel free to submit a [pull request](https://github.com/CodeDotJS/quora-api/pull/new/master) or an [issue!](https://github.com/CodeDotJS/quora-api/issues/new) :hearts:


## License

MIT &copy; [Rishi Giri](http://rishigiri.com)
