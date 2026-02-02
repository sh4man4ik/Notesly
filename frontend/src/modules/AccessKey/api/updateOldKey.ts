import getApiLink from '../../../shared/helpers/getApiLink';

async function updateOldKey(oldKey: any, newKey: any) {
	let url = getApiLink();

	fetch(`${url}/api/remakeKey`, {
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
