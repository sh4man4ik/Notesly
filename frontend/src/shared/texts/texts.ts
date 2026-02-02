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
			text: 'The website stores only your notes and their access key'
		},
		secondCard: {
			title: 'Source code is open',
			text: 'All source code is available in the GitHub repository',
			button: 'OPEN'
		},
		thirdCard: {
			title: 'Simple synchronization',
			text: 'Just copy the link from the settings to access your notes'
		},
		fourthCard: {
			title: 'Website is free',
			text: 'The website is completely free for all users'
		}
	},
	steps: {
		title: 'How to synchronize?',
		firstStep: 'Write notes',
		secondStep: 'Copy the link from the settings',
		thirdStep: 'Access anywhere'
	},
	FAQ: {
		title: 'FAQ',
		firstQuestion: {
			title: 'What happens if I delete the website data?',
			text: 'Deleting the website data creates a new key and new notes. Your old notes will still be accessible, but only via their link.'
		},
		secondQuestion: {
			title: 'What happens if I regenerate the key?',
			text: 'If you regenerate the key, anyone with the old link will no longer be able to see your notes. Only you will still have access.'
		},
		thirdQuestion: {
			title: 'How many notes can I create?',
			text: 'Only one page of notes is visible at a time, but your old notes remain accessible via their link. So, there’s effectively no limit to the number of notes you can create.'
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
		secondButton: 'REGENERATE'
	},
	alert: {
		success: {
			firstText: 'Link copied successfully!'
		},
		info: {
			firstText: 'Link regenerated successfully!'
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
