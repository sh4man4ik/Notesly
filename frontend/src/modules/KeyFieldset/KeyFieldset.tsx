import { useState, useEffect } from 'react';
import Modal from './components/InsertSpecialKeyModal.tsx';
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

	useEffect(() => {
		console.log('update');
	}, [specialKey]);

	let copySpecialKey = () => {
		navigator.clipboard.writeText(specialKey);
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
		</>
	);
}

export default KeyFieldset;
