import getText from '../../shared/texts/texts.ts';

function Navbar() {
	return (
		<>
			<div className="navbar bg-base-100 shadow-sm">
				<a className="btn btn-ghost text-xl">{getText('navbar.title')}</a>
			</div>
		</>
	);
}

export default Navbar;
