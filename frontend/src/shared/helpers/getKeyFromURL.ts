function getKeyFromURL() {
	let params = new URLSearchParams(window.location.search);
	let paramsKey = params.get('key');
	return paramsKey;
}

export default getKeyFromURL;
