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
		title: 'How to synchronize?',
		firstStep: 'Copy the key',
		secondStep: 'Insert it into another device',
		thirdStep: 'Sync done'
	},
	FAQ: {
		title: 'FAQ',
		firstQuestion: {
			title: 'What does the INSERT button do?',
			text: 'INSERT syncs your notes with another device using a special key. Existing notes will be replaced with the synced ones.'
		},
		secondQuestion: {
			title: 'What does the DISCONNECT button do?',
			text: 'DISCONNECT unlinks your device, generates a new key, and clears all notes.'
		},
		thirdQuestion: {
			title: 'Why is it better not to delete website data?',
			text: 'If you disconnect the first device and clear browser data on the second, any notes on the second device can be lost. To avoid this, open the notes page on the second device first so the data is saved.'
		}
	},
	footer: {
		text: `Copyright © ${new Date().getFullYear()} - Made with love ❤️`
	},
	notes: {
		placeholder: 'Write something...'
	},
	keyFieldset: {
		title: 'Special key',
		firstButton: 'COPY',
		secondButton: 'DISCONNECT',
		thirdButton: 'INSERT',
		modal: {
			title: 'Insert your special key here',
			placeholder: 'special key',
			button: 'SAVE'
		}
	},
	alert: {
		success: {
			firstText: 'Message copied successfully!'
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
