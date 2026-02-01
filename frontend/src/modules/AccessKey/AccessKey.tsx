import { useState } from 'react';
import SuccessAlert from '../../shared/ui/SuccessAlert/SuccessAlert.tsx';
import getText from '../../shared/texts/texts.ts';

function AccessKey() {
	let [key, setKey] = useState(() => {
		return localStorage.getItem('key') || '';
	});
	let [showAlert, setShowAlert] = useState(false);
	let url = 'http://localhost:443/';

	let generateKey = () => {
		let newKey = url + crypto.randomUUID();
		return newKey;
	};

	let copyKey = () => {
		navigator.clipboard.writeText(key);

		setShowAlert(true);

		setTimeout(() => {
			setShowAlert(false);
		}, 2500);
	};

	let remakeKey = () => {
		let oldKey = localStorage.getItem('key');
		let newKey = generateKey();

		localStorage.setItem('key', newKey);
		setKey(newKey);
	};

	return (
		<>
			<fieldset className="fieldset justify-self-center margin-top">
				<legend className="fieldset-legend small-font">{getText('keyFieldset.title')}</legend>
				<input type="text" className="input small-font bg-base-300 text-base-content" value={key} disabled />
				<div className="flex gap-2">
					<button className="btn btn-accent flex-1 small-font" onClick={copyKey}>
						{getText('accessKey.firstButton')}
					</button>
					<button className="btn btn-error flex-1 small-font" onClick={remakeKey}>
						{getText('accessKey.secondButton')}
					</button>
				</div>
			</fieldset>

			<SuccessAlert text={getText('alert.success.firstText')} show={showAlert}></SuccessAlert>
		</>
	);
}

export default AccessKey;
