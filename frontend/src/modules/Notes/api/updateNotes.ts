import getKeyFromURL from '../../../shared/helpers/getKeyFromURL';

function updateNotes() {
	let key = getKeyFromURL();
	let note = localStorage.getItem('notes');

	/* prod https://notesly.onrender.com/api/updateNotes */
	/* dev http://localhost:5000/api/updateNotes */

	if (key) {
		fetch('https://notesly.onrender.com/api/updateNotes', {
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
}

export default updateNotes;
