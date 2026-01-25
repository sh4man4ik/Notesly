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
		firstCard: {
			title: 'No registration required',
			text: 'You can start using the website easily and simply at any time'
		},
		secondCard: {
			title: 'Source code is open',
			text: 'All source code is available in the GitHub repository',
			button: 'OPEN'
		},
		thirdCard: {
			title: 'Synchronization between devices',
			text: 'With a special key, you can synchronize between different devices'
		},
		fourthCard: {
			title: 'Website is free',
			text: 'The website is completely free for all users'
		}
	},
	steps: {
		firstStep: 'Copy the key',
		secondStep: 'Insert it into another device',
		thirdStep: 'Sync done'
	},
	FAQ: {
		firstQuestion: {
			title: 'Is registration required?',
			text: 'No, there is no registration on the website.'
		},
		secondQuestion: {
			title: 'How does synchronization between devices work?',
			text: 'A special key is used for synchronization, which can be copied and pasted on another device.'
		},
		thirdQuestion: {
			title: 'Is the website free?',
			text: 'Yes, the website is absolutely free.'
		}
	},
	footer: {
		text: `Copyright © ${new Date().getFullYear()} - Made with love ❤️`
	},
	keyFieldset: {
		title: 'Special key',
		firstButton: 'COPY',
		secondButton: 'REMAKE',
		thirdButton: 'INSERT KEY',
		modal: {
			title: 'Insert your special key here',
			placeholder: 'special key',
			button: 'SAVE'
		}
	},
	notes: {
		placeholder: 'Write something...'
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
