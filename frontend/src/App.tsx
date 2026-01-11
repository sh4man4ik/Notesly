import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/about" element={<AboutPage></AboutPage>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
