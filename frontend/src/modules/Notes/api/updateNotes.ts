function updateNotes() {
	let key = localStorage.getItem('key');
	let note = localStorage.getItem('notes');

	/* https://notesly-sync.netlify.app/api/updateNotes */
	/* http://localhost:5000/api/updateNotes */

	fetch('https://notesly-sync.netlify.app/api/updateNotes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: key,
			note: note
		})
	}).catch((error) => {
		console.log(error);
	});
}

export default updateNotes;
