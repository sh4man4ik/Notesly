import { useState } from 'react';
import getText from '../../shared/texts/texts.ts';

function KeyFieldset() {
	let generateSpecialKey = () => {
		let newSpecialKey = crypto.randomUUID();
		localStorage.setItem('specialKey', newSpecialKey);
		return newSpecialKey;
	};

	let [specialKey, setSpecialKey] = useState(() => {
		let receivedSpecialKey = localStorage.getItem('specialKey');

		if (receivedSpecialKey) {
			return receivedSpecialKey;
		} else {
			return generateSpecialKey();
		}
	});

	let copySpecialKey = () => {
		navigator.clipboard.writeText(specialKey);
	};

	let remakeSpecialKey = () => {
		let newSpecialKey = generateSpecialKey();
		setSpecialKey(newSpecialKey);
	};

	return (
		<>
			<fieldset className="fieldset justify-self-center margin-top small-font">
				<legend className="fieldset-legend">{getText('keyFieldset.title')}</legend>
				<input type="text" className="input small-font" value={specialKey} disabled />
				<div className="flex gap-2">
					<button className="btn btn-accent flex-1" onClick={copySpecialKey}>
						{getText('keyFieldset.firstButton')}
					</button>
					<button className="btn btn-error flex-1" onClick={remakeSpecialKey}>
						{getText('keyFieldset.secondButton')}
					</button>
				</div>
			</fieldset>
		</>
	);
}

export default KeyFieldset;
