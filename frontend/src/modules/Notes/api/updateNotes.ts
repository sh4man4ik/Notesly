function updateNotes() {
	let key = localStorage.getItem('key');
	let note = localStorage.getItem('notes');

	fetch('http://localhost:5000/api/updateNotes', {
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
