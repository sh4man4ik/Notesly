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
			title: 'What does the INSERT button do?',
			text: 'The INSERT button synchronizes your notes with another device whose special key you have entered. Your old notes will be deleted and replaced with new, synchronized ones.'
		},
		secondQuestion: {
			title: 'What does the DISCONNECT button do?',
			text: 'The DISCONNECT button disconnects your synchronized device from others. Your key is updated to a new one and your notes are cleared.'
		},
		thirdQuestion: {
			title: 'What happens if you click DISCONNECT on first device and clear your browser data without visiting the website on second device?',
			text: 'After clicking the DISCONNECT button on first device and clearing the browser data on the second, the data on the second device will be lost. To prevent this from happening, simply switch to the second device website so that the data is recorded in the database.'
		}
	},
	footer: {
		text: `Copyright © ${new Date().getFullYear()} - Made with love ❤️`
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
	notes: {
		placeholder: 'Write something...'
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
