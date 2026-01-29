import { useState } from 'react';
import Modal from './components/InsertSpecialKeyModal/InsertSpecialKeyModal.tsx';
import SuccessAlert from '../../shared/ui/SuccessAlert/SuccessAlert.tsx';
import getText from '../../shared/texts/texts.ts';

function KeyFieldset() {
	let generateSpecialKey = () => {
		let newSpecialKey = crypto.randomUUID();
		localStorage.setItem('specialKey', newSpecialKey);
		return newSpecialKey;
	};

	let [specialKey, setSpecialKey] = useState(() => {
		return localStorage.getItem('specialKey') || generateSpecialKey();
	});
	let [showAlert, setShowAlert] = useState(false);

	let copySpecialKey = () => {
		navigator.clipboard.writeText(specialKey);

		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 2500);
	};

	let remakeSpecialKey = () => {
		let newSpecialKey = generateSpecialKey();
		setSpecialKey(newSpecialKey);
	};

	return (
		<>
			<fieldset className="fieldset justify-self-center margin-top">
				<legend className="fieldset-legend small-font">{getText('keyFieldset.title')}</legend>
				<input
					type="text"
					className="input small-font bg-base-300 text-base-content"
					value={specialKey}
					disabled
				/>
				<div className="flex gap-2">
					<button className="btn btn-accent flex-1 small-font" onClick={copySpecialKey}>
						{getText('keyFieldset.firstButton')}
					</button>
					<Modal setSpecialKey={setSpecialKey}></Modal>
				</div>
				<button className="btn btn-error flex-1 small-font" onClick={remakeSpecialKey}>
					{getText('keyFieldset.secondButton')}
				</button>
			</fieldset>

			<SuccessAlert text={getText('alert.success.firstText')} show={showAlert}></SuccessAlert>
		</>
	);
}

export default KeyFieldset;
