import getKeyFromURL from '../../../shared/helpers/getKeyFromURL';
import getApiLink from '../../../shared/helpers/getApiLink';

function updateNotes() {
	let url = getApiLink();
	let key = getKeyFromURL();
	let note = localStorage.getItem('notes');

	if (key) {
		fetch(`${url}/api/updateNotes`, {
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
