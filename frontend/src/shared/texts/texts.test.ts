import getText from '../../shared/texts/texts';

test('Checking for the right text', () => {
	let text = 'Notesly';
	expect(getText('navbar.title')).toBe(text);
});
