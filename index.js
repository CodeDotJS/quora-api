'use strict';

const got = require('got');
const cheerio = require('cheerio');
const Promise = require('pinkie-promise');

const remAns = part => {
	return part.replace('Answers', '');
};

const remEndorse = part => {
	return part.replace('Endorsements', '');
};

// displays basic information of a quora user's profile
const quoraScrapper = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			profilePicture: $('.profile_photo_img').attr('data-src') || null,
			biography: $('.ProfileNameAndSig .IdentitySig').eq(0).text() || null,
			fullBio: $('.ExpandedUserBio').text() || null,
			publicAnswers: $('.list_count').eq(0).text() || null,
			questions: $('.list_count').eq(1).text() || null,
			posts: $('.list_count').eq(2).text() || null,
			followers: $('.list_count').eq(3).text() || null,
			following: $('.list_count').eq(4).text() || null,
			edits: $('.list_count').eq(5).text() || null,
			monthlyViews: $('.total_count').eq(0).text() || null,
			totalViews: $('.total_count').eq(1).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

const quora = module.exports = username => quoraScrapper(username);

// extract data of knows about section
quora.knowsAbout = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			knowsAbout1: $('.TopicPreviewBioAnswers .topic_name, .TopicPreviewItemSentence .topic_name').eq(3).text(),
			answers1: remAns($('.UserAnswersInTopicLink').eq(0).text()),
			endorsement1: remEndorse($('.UserTopicEndorsementsLink').eq(0).text()),
			knowsAbout2: $('.TopicPreviewBioAnswers .topic_name, .TopicPreviewItemSentence .topic_name').eq(4).text(),
			answers2: remAns($('.UserAnswersInTopicLink').eq(1).text()),
			endorsement2: remEndorse($('.UserTopicEndorsementsLink').eq(1).text()),
			knowsAbout3: $('.TopicPreviewBioAnswers .topic_name, .TopicPreviewItemSentence .topic_name').eq(5).text(),
			answers3: remAns($('.UserAnswersInTopicLink').eq(2).text()),
			endorsement3: remEndorse($('.UserTopicEndorsementsLink').eq(2).text())
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// highlights => published writer, most viewed in, etc
quora.highlights = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			info1: $('.HighlightListItem .title').eq(0).text() || null,
			part1: $('.HighlightListItem .detail').eq(0).text() || null,
			info2: $('.HighlightListItem .title').eq(1).text() || null,
			part2: $('.HighlightListItem .detail').eq(1).text() || null,
			info3: $('.HighlightListItem .title').eq(2).text() || null,
			part3: $('.HighlightListItem .detail').eq(2).text() || null,
			info4: $('.HighlightListItem .title').eq(3).text() || null,
			part4: $('.HighlightListItem .detail').eq(3).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// general information - about user's residence place, workplace and instutie
quora.about = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			place: $('.TopicPreviewBioAnswers .topic_name, .TopicPreviewItemSentence .topic_name').eq(0).text() || null,
			work: $('.TopicPreviewBioAnswers .topic_name, .TopicPreviewItemSentence .topic_name').eq(1).text() || null,
			college: $('.TopicPreviewBioAnswers .topic_name, .TopicPreviewItemSentence .topic_name').eq(2).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// fetches answer of a general question - max 5
quora.answer = userAnswer => {
	if (typeof userAnswer !== 'string') {
		return Promise.reject(new Error('answer link required'));
	}

	const url = `https://www.quora.com/${userAnswer}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			answer0: $('.ExpandedAnswer').eq(0).text().split('View Upvotes')[0] || null,
			writer0: $('.NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .user, .NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .anon_user').eq(0).text() || null,
			answer1: $('.ExpandedAnswer').eq(1).text().split('View Upvotes')[0] || null,
			writer1: $('.NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .user, .NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .anon_user').eq(1).text() || null,
			answer2: $('.ExpandedAnswer').eq(2).text().split('View Upvotes')[0] || null,
			writer2: $('.NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .user, .NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .anon_user').eq(2).text() || null,
			answer3: $('.ExpandedAnswer').eq(3).text().split('View Upvotes')[0] || null,
			writer3: $('.NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .user, .NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .anon_user').eq(3).text() || null,
			answer4: $('.ExpandedAnswer').eq(4).text().split('View Upvotes')[0] || null,
			writer4: $('.NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .user, .NewGridQuestionPage .AnswerBase .ContentHeader .feed_item_answer_user .anon_user').eq(4).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// fetches answer's count on a particular question
quora.answer.count = question => {
	if (typeof question !== 'string') {
		return Promise.reject(new Error('question link required'));
	}

	const url = `https://www.quora.com/${question}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			count: $('.answer_count').text()
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// fetches answer, asnwerd by a user
quora.answer.user = userAnswer => {
	if (typeof userAnswer !== 'string') {
		return Promise.reject(new Error('answer link required'));
	}

	const url = `https://www.quora.com/${userAnswer}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			answer: $('.ExpandedAnswer').text().split('View Upvotes')[0] || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// get user's blog count
quora.blogCount = username => {
	if (typeof username !== 'string') {
		Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}/blogs`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			blog: $('.ContentFeedTabs li.active a').text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// User's activities
// Recent activities - max 5
quora.activity = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	const url = `https://www.quora.com/${username}/activity`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			question0: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(0).text() || null,
			action0: $('.EventHeader, .ContentReason, .inline_suggestions_reason').eq(0).text() || null,
			question1: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(1).text() || null,
			action1: $('.EventHeader, .ContentReason, .inline_suggestions_reason').eq(1).text() || null,
			question2: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(2).text() || null,
			action2: $('.EventHeader, .ContentReason, .inline_suggestions_reason').eq(2).text() || null,
			question3: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(3).text() || null,
			action3: $('.EventHeader, .ContentReason, .inline_suggestions_reason').eq(3).text() || null,
			question4: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(4).text() || null,
			action4: $('.EventHeader, .ContentReason, .inline_suggestions_reason').eq(4).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong';
		}
		return err;
	});
};

// recently asked questions - max 5
quora.activity.asked = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}/questions`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			question0: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(0).text() || null,
			asked0: $('.timestamp').eq(0).text() || null,
			question1: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(1).text() || null,
			asked1: $('.timestamp').eq(1).text() || null,
			question2: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(2).text() || null,
			asked2: $('.timestamp').eq(2).text() || null,
			question3: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(3).text() || null,
			asked3: $('.timestamp').eq(3).text() || null,
			question4: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(4).text() || null,
			asked4: $('.timestamp').eq(4).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong';
		}
		return err;
	});
};

// recently answered questions - max 5
quora.activity.answered = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	const url = `https://www.quora.com/${username}`;
	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			question0: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(0).text() || null,
			details0: $('.CredibilitySection, .CredibilityFacts').eq(0).text() || null,
			question1: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(1).text() || null,
			details1: $('.CredibilitySection, .CredibilityFacts').eq(1).text() || null,
			question2: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(2).text() || null,
			details2: $('.CredibilitySection, .CredibilityFacts').eq(2).text() || null,
			question3: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(3).text() || null,
			details3: $('.CredibilitySection, .CredibilityFacts').eq(3).text() || null,
			question4: $('.feed_item .question_link, .feed_item .BoardItemTitle').eq(4).text() || null,
			details4: $('.CredibilitySection, .CredibilityFacts').eq(4).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong';
		}
		return err;
	});
};

// dicing basic information into smaller single functions
// get only profile picture's link
quora.profileImage = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	const url = `https://www.quora.com/${username}`;
	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			profilePicture: $('.profile_photo_img').attr('data-src') || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// get only initial description of a user
quora.bio = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			biography: $('.ProfileNameAndSig .IdentitySig').eq(0).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// complete biography of a  quora user
quora.fullBio = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			fullBio: $('.ExpandedUserBio').text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// fetch total public answer (count)
quora.publicAnswers = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			publicAnswers: $('.list_count').eq(0).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// total public question asked by a user
quora.questions = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			questions: $('.list_count').eq(1).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// total blog posts made by user
quora.posts = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			posts: $('.list_count').eq(2).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// total followers count
quora.followers = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			followers: $('.list_count').eq(3).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// total following
quora.following = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			following: $('.list_count').eq(4).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// total edits made
quora.edits = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			edits: $('.list_count').eq(5).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// total answer views generated in a month
quora.monthlyViews = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			monthlyViews: $('.total_count').eq(0).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};

// all time views on user's answer
quora.totalViews = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = `https://www.quora.com/${username}`;

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		return {
			totalViews: $('.total_count').eq(1).text() || null
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong!';
		}
		return err;
	});
};
