function initGlobals() {
	/* theme */
	if (!localStorage.getItem('theme')) {
		let darkTheme = 'dim';
		let lightTheme = 'winter';

		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			localStorage.setItem('theme', darkTheme);
		} else {
			localStorage.setItem('theme', lightTheme);
		}
	}

	/* notes */
	if (!localStorage.getItem('notes')) {
		localStorage.setItem('notes', '');
	}

	/* key */
	if (!localStorage.getItem('key')) {
		let key = crypto.randomUUID();
		localStorage.setItem('key', key);
	}
}

export default initGlobals;
