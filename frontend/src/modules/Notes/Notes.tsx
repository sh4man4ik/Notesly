import { useState, useEffect } from 'react';
import getText from '../../shared/texts/texts';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.bubble.css';

function Notes() {
	let [notes, setNotes] = useState(() => {
		return localStorage.getItem('notes') || '';
	});

	let modules = {
		toolbar: [
			[
				{ header: [1, 2, 3, false] },
				'bold',
				'italic',
				'underline',
				'link',
				{ list: 'ordered' },
				{ list: 'bullet' },
				'clean'
			]
		]
	};

	useEffect(() => {
		localStorage.setItem('notes', notes);
	}, [notes]);

	return (
		<>
			<div className="flex justify-center flex-1">
				<ReactQuill
					theme="bubble"
					modules={modules}
					value={notes}
					className="textarea w-[95%] mt-[2.5%] mb-[2.5%] main-content-color rounded-lg outline-none"
					onChange={setNotes}
					placeholder={getText('notes.placeholder')}
				></ReactQuill>
			</div>
		</>
	);
}

export default Notes;
