function updateNotes() {
	let note = localStorage.getItem('notes');
	let key = localStorage.getItem('specialKey');

	fetch('http://localhost:5000/api/updateNotes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			note: note,
			key: key
		})
	}).catch((error) => {
		console.log(error);
	});
}

export default updateNotes;
