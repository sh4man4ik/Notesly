import Navbar from '../../shared/components/Navbar/Navbar';
import Notes from '../../modules/Notes';
import getKeyFromURL from '../../shared/helpers/getKeyFromURL';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function NotesPage() {
	let navigate = useNavigate();

	useEffect(() => {
		let paramsKey = getKeyFromURL();

		if (paramsKey === null) {
			let key = localStorage.getItem('key');
			navigate(`/?key=${key}`, { replace: true });
		}
	}, [navigate]);

	return (
		<>
			<div className="h-dvh flex flex-col">
				<Navbar></Navbar>
				<Notes></Notes>
			</div>
		</>
	);
}

export default NotesPage;
