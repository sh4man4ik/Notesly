import { useState, useEffect } from 'react';
import getText from '../../shared/texts/texts';
import getNotes from './api/getNotes';
import updateNotes from './api/updateNotes';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.bubble.css';

function Notes() {
	let [notes, setNotes] = useState('');

	useEffect(() => {
		(async () => {
			let data = await getNotes();
			if (data !== undefined) {
				setNotes(data);
			}
		})();
	}, []);

	useEffect(() => {
		updateNotes();
	}, [notes]);

	let modules = {
		toolbar: [
			[
				{ header: [1, 2, 3, false] },
				'bold',
				'italic',
				'underline',
				{ align: [] },
				{ list: 'ordered' },
				{ list: 'bullet' },
				'clean'
			]
		]
	};

	let handleChange = (event: any) => {
		localStorage.setItem('notes', event);
		setNotes(event);
	};

	return (
		<>
			<div className="flex justify-center flex-1">
				<ReactQuill
					theme="bubble"
					modules={modules}
					value={String(notes)}
					className="textarea main-content-color outline-none w-[95%] mt-[2.5%] mb-[2.5%]"
					onChange={handleChange}
					placeholder={getText('notes.placeholder')}
				></ReactQuill>
			</div>
		</>
	);
}

export default Notes;
