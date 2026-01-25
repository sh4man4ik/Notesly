import Navbar from '../../shared/components/Navbar/Navbar';
import Notes from '../../modules/Notes';

function NotesPage() {
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
