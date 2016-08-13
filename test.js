import test from 'ava';
import m from './';

test('quora()', async t => {
	const user = await m('Rishi-Giri-1');

	t.is(user.profilePicture, 'https://qph.ec.quoracdn.net/main-thumb-55835808-200-xebjkpvffzmsoyzvrevkikflnftidhnv.jpeg');
	t.is(user.biography, 'JavaScript, Python and FOSS Enthusiast.');
	t.is(user.fullBio, '17.9 | Self made computer programmer.Want to be the best Web || JavaScript || Python Developer and Hacker.WEB || GIT');
	t.is(user.publicAnswers, '212');
	t.is(user.questions, '14');
	t.is(user.posts, '14');
	t.is(user.followers, '156');
	t.is(user.following, '0');
	t.is(user.edits, '1,180');
});

test('quora.knowsAbout()', async t => {
	const userKnowsAbout = await m.knowsAbout('Adam-DAngelo');

	t.is(userKnowsAbout.knowsAbout1, 'Startups');
	t.is(userKnowsAbout.answers1, '63');
	t.is(userKnowsAbout.endorsement1, '95');
	t.is(userKnowsAbout.knowsAbout2, 'Quora (company)');
	t.is(userKnowsAbout.answers2, '37');
	t.is(userKnowsAbout.endorsement2, '269');
	t.is(userKnowsAbout.knowsAbout3, 'California Institute of Technology');
	t.is(userKnowsAbout.answers3, '9');
	t.is(userKnowsAbout.endorsement3, '48');
});

test('quora.hightlights()', async t => {
	const userHighlights = await m.highlights('Adam-DAngelo');

	t.is(userHighlights.info1, 'Top Writer');
	t.is(userHighlights.part1, '2016, 2015, 2014, and 2013');
	t.is(userHighlights.info2, 'Knowledge Prize Winner');
	t.is(userHighlights.part2, 'Insert a dynamic date here');
	t.is(userHighlights.info3, 'Published Writer');
	t.is(userHighlights.part3, 'Forbes');
	t.is(userHighlights.info4, 'Most Viewed Writer');
	t.is(userHighlights.part4, ' Palo Alto, CA,  Quora,  California Institute of Technology, and 29 more');
});

test('quora.answer()', async t => {
	const firstAnswer = await m.answer('What-is-JavaScript');

	t.is(firstAnswer.answer0, `Well, when you go to a website, you (the client) requests the website from some other computer that stores the website (the server).The server sends a bunch of files to you (maybe HTML files and CSS files)*, including probably some JavaScript files.Then you and the server stop communicating**. So how do you \"interact\" with the website? Well, for the most part, HTML and CSS provide the layout and design of the website. You can submit forms, click links, etc. But JavaScript lets the website do things like validate forms, create visual effects, etc.Your browser is what interprets all the files that the server sends you, and in large part, JavaScript helps you interact with the website without necessarily needing to communicate with the server***. This is why JavaScript is a client-side scripting language. As far as properties of the language, we call it dynamic and weakly-typed. We don't have to declare what types of variables we create, and the structure of the language lets you manipulate it to act like a procedural or class-based language. Unfortunately, this can make it hard to debug since it doesn't hold your hand. So, that is what JavaScript usually is. But recently people have started using it for the server, just like you'd use PHP, Python, Ruby, etc. JavaScript can program a server in the form of Node.js. This lets you use JavaScript on the client and the server, which helps you streamline things.But wait, there's more.MongoDB is a database system, like MySQL, etc., but you interact with it through the command line using... you guessed it, JavaScript. So, JavaScript is a very dynamic programming language.*This depends on the overall framework of the website **Unless you and the server keep open a persistent connection***Except in the case of AJAX calls, etc.Updated 60w ago · `);
});

test('quora.answer.count()', async t => {
	const countPart = await m.answer.count('What-is-JavaScript');

	t.is(countPart.count, `23 Answers`);
});

test('quora.answer.user()', async t => {
	const userPart = await m.answer.user('What-was-the-first-program-Adam-DAngelo-wrote/answer/Adam-DAngelo');

	t.is(userPart.answer, `I'm not sure if I remember exactly the first program, but I got started programming by making games in QBasic. It was a great environment to learn in, with easy built-in help that you could bring up in context with a single keystroke, and lots of examples to look through and learn from. For a year or two in middle school this was basically all I did after school and it gave me a very strong foundation and intuitions about programming.Written 29w ago · `);
});

test('quora.blogCount()', async t => {
	const userBlog = await m.blogCount('Adam-DAngelo');

	t.is(userBlog.blog, '16 Blogs');
});

test('quora.activity()', async t => {
	const activity = await m.activity('Rishi-Giri-1');

	t.is(activity.question0, 'What are some things non-programmers say that frustrate programmers?');
	t.is(activity.action0, '  Rishi Giri upvoted this · 1d ago');
	t.is(activity.question1, 'What are some things you do that you think no one else does?');
	t.is(activity.action1, '  Rishi Giri upvoted this · 1w ago');
	t.is(activity.question2, 'Is it ever too late for someone to learn how to program?');
	t.is(activity.action2, '  Rishi Giri upvoted this answer from 2015 · 1w ago');
	t.is(activity.question3, 'I am 24 years old and just started learning coding. I want to be a programmer. Am I too late in the game?');
	t.is(activity.action3, '  Rishi Giri upvoted this answer from 2014 · 2w ago');
	t.is(activity.question4, 'What are the best answers for "Why should I hire you"?');
	t.is(activity.action4, '  Rishi Giri followed this · 2w ago');
});

test('quora.activity.answered()', async t => {
	const userAc = await m.activity.answered('Rishi-Giri-1');

	t.is(userAc.question2, 'How can I see a full-size profile picture of someone on Instagram?');
	t.is(userAc.details2, '17.2k Views');
});

test('quora.activity.asked()', async t => {
	const userAc = await m.activity.asked('Rishi-Giri-1');

	t.is(userAc.question0, 'How can I prepare myself to be a software engineer at Google?');
	t.is(userAc.asked0, '3w ago');
});
