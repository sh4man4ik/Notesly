const EN_TEXTS = {
	navbar: {
		title: 'Notesly',
		firstElement: 'Notes',
		secondElement: 'Settings',
		thirdElement: 'About'
	},
	hero: {
		title: {
			firstWord: 'ALWAYS',
			secondWord: 'WITH',
			thirdWord: 'YOU'
		},
		subtitle: 'Notesly is always with you when you need it most',
		button: 'Get Started'
	},
	cards: {
		title: 'Why choose this website?',
		firstCard: {
			title: 'title',
			text: 'text'
		},
		secondCard: {
			title: 'Source code is open',
			text: 'All source code is available in the GitHub repository',
			button: 'OPEN'
		},
		thirdCard: {
			title: 'title',
			text: 'text'
		},
		fourthCard: {
			title: 'Website is free',
			text: 'The website is completely free for all users'
		}
	},
	steps: {
		title: 'title',
		firstStep: 'step',
		secondStep: 'step',
		thirdStep: 'step'
	},
	FAQ: {
		title: 'FAQ',
		firstQuestion: {
			title: 'title',
			text: 'text'
		},
		secondQuestion: {
			title: 'title',
			text: 'text'
		},
		thirdQuestion: {
			title: 'title',
			text: 'text'
		}
	},
	footer: {
		text: `Copyright © ${new Date().getFullYear()} - Made with love ❤️`
	},
	notes: {
		placeholder: 'Write something...'
	},
	accessKey: {
		title: 'Link settings',
		firstButton: 'COPY',
		secondButton: 'REMAKE'
	},
	alert: {
		success: {
			firstText: 'Link copied successfully!'
		},
		info: {
			firstText: ''
		},
		error: {
			firstText: ''
		}
	}
};
/* Here you can add other languages */

function getText(path: string) {
	let language = navigator.language.slice(0, 2);
	let TEXTS: any;

	switch (language) {
		case 'en':
			TEXTS = EN_TEXTS;
			break;
		/* Here you can add other languages */
		default:
			TEXTS = EN_TEXTS;
			break;
	}

	let parts = path.split('.');

	for (let i = 0; i < parts.length; i++) {
		TEXTS = TEXTS[parts[i]];

		if (!TEXTS) {
			break;
		}
	}

	return TEXTS;
}

export default getText;
