import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotesPage from './pages/NotesPage/NotesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import initGlobals from './shared/globals/globals';

function App() {
	initGlobals();

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<NotesPage></NotesPage>}></Route>
					<Route path="/about" element={<AboutPage></AboutPage>}></Route>
					<Route path="/settings" element={<SettingsPage></SettingsPage>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
