const EN_TEXTS = {
	navbar: {
		title: 'Notesly',
		button: 'Get Started'
	},
	hero: {
		title: 'Always with you',
		subtitle: 'Notesly is always with you when you need it most',
		button: 'Get Started'
	},
	cards: {
		firstCard: {
			title: 'Title 1',
			text: 'Text 1'
		},
		secondCard: {
			title: 'Title 2',
			text: 'Text 2'
		},
		thirdCard: {
			title: 'Title 3',
			text: 'Text 3'
		},
		fourthCard: {
			title: 'Title 4',
			text: 'Text 4'
		}
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
			text: 'Yes, the site is absolutely free.'
		}
	},
	footer: {
		text: `Copyright © ${new Date().getFullYear()} - Made with love ❤️`
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
