import getKeyFromURL from '../../../shared/helpers/getKeyFromURL';
import getApiLink from '../../../shared/helpers/getApiLink';

async function getNotes() {
	let url = getApiLink();
	let key = getKeyFromURL();
	let notes;

	try {
		let response: any = await fetch(`${url}/api/getNotes`, {
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
