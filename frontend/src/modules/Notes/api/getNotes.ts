import getKeyFromURL from '../../../shared/helpers/getKeyFromURL';

async function getNotes() {
	let key = getKeyFromURL();
	let notes;

	try {
		let response: any = await fetch('http://localhost:5000/api/getNotes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				key: key
			})
		});

		let data = await response.json();
		notes = data.note;
	} catch (error) {
		console.log(error);
	}

	return notes;
}

export default getNotes;
