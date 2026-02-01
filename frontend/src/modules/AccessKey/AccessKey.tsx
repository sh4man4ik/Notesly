import { useState } from 'react';
import SuccessAlert from '../../shared/ui/SuccessAlert/SuccessAlert.tsx';
import Title from '../../shared/ui/Title/Title.tsx';
import getText from '../../shared/texts/texts.ts';
import updateOldKey from './api/updateOldKey.ts';

function AccessKey() {
	let [key, setKey] = useState(() => {
		return localStorage.getItem('key') || '';
	});
	let [showAlert, setShowAlert] = useState(false);

	/* prod https://notesly-sync.netlify.app/?key= */
	/* dev http://localhost:443/?key= */

	let url = 'https://notesly-sync.netlify.app/?key=';

	let generateKey = () => {
		let newKey = crypto.randomUUID();
		return newKey;
	};

	let copyKey = () => {
		navigator.clipboard.writeText(url + key);

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

		updateOldKey(oldKey, newKey);
	};

	return (
		<>
			<div className="margin-top">
				<Title text={getText('accessKey.title')}></Title>
				<fieldset className="fieldset justify-self-center">
					<legend className="fieldset-legend small-font">{getText('keyFieldset.title')}</legend>
					<input
						type="text"
						className="input small-font bg-base-300 text-base-content"
						value={url + key}
						disabled
					/>
					<div className="flex gap-2">
						<button className="btn btn-accent flex-1 small-font" onClick={copyKey}>
							{getText('accessKey.firstButton')}
						</button>
						<button className="btn btn-error flex-1 small-font" onClick={remakeKey}>
							{getText('accessKey.secondButton')}
						</button>
					</div>
				</fieldset>
			</div>

			<SuccessAlert text={getText('alert.success.firstText')} show={showAlert}></SuccessAlert>
		</>
	);
}

export default AccessKey;
