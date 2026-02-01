async function updateOldKey(oldKey: any, newKey: any) {
	/* prod https://notesly.onrender.com/api/remakeKey */
	/* dev http://localhost:5000/api/remakeKey */

	fetch('http://localhost:5000/api/remakeKey', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			oldKey: oldKey,
			newKey: newKey
		})
	}).catch((error) => {
		console.log(error);
	});
}

export default updateOldKey;
