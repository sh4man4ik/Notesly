import { useState } from 'react';
import getText from '../../../shared/texts/texts.ts';

function InsertSpecialKeyModal(props: any) {
	let [insertedSpecialKey, setInsertedSpecialKey] = useState('');

	let updateSpecialKey = () => {
		props.setSpecialKey(insertedSpecialKey);
		localStorage.setItem('specialKey', insertedSpecialKey);
	};

	return (
		<>
			<button
				className="btn btn-success flex-1 small-font"
				onClick={() => {
					let modal = document.getElementById('input_key_modal') as HTMLDialogElement;
					if (modal) {
						modal.showModal();
					}
				}}
			>
				{getText('keyFieldset.thirdButton')}
			</button>
			<dialog id="input_key_modal" className="modal">
				<div className="modal-box main-content-color">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>

					<div className="grid gap-6">
						<p className="small-font mr-[14px]">{getText('keyFieldset.modal.title')}</p>

						<div className="join">
							<input
								className="input bg-base-300 text-base-content join-item small-font"
								placeholder={getText('keyFieldset.modal.placeholder')}
								value={insertedSpecialKey}
								onChange={(event) => setInsertedSpecialKey(event.target.value)}
							/>

							<form method="dialog">
								<button className="btn btn-success join-item small-font" onClick={updateSpecialKey}>
									{getText('keyFieldset.modal.button')}
								</button>
							</form>
						</div>
					</div>
				</div>
			</dialog>
		</>
	);
}

export default InsertSpecialKeyModal;
