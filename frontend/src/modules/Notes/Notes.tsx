import { useState, useEffect } from 'react';
import getText from '../../shared/texts/texts';

function Notes() {
	let [notes, setNotes] = useState(() => localStorage.getItem('notes') || '');

	useEffect(() => {
		localStorage.setItem('notes', notes);
	}, [notes]);

	return (
		<>
			<div className="flex justify-center flex-1">
				<textarea
					className="textarea outline-none main-content-color small-font mt-[2.5%] mb-[2.5%] w-[95%]"
					placeholder={getText('notes.placeholder')}
					id="notes"
					value={notes}
					onChange={(event) => setNotes(event.target.value)}
				></textarea>
			</div>
		</>
	);
}

export default Notes;
