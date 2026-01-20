import { Link } from 'react-router-dom';
import getText from '../../texts/texts.ts';
import ThemeController from '../../ui/ThemeController/ThemeController.tsx';

function Navbar() {
	return (
		<>
			<div className="drawer">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* Navbar */}
					<div className="navbar main-content-color w-full">
						<div className="flex-none lg:hidden">
							<label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block h-6 w-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
						<div className="mx-2 flex-1 px-2">{getText('navbar.title')}</div>
						<div className="hidden flex-none lg:block">
							<ul className="menu menu-horizontal flex items-center">
								{/* Navbar menu content here */}
								<li>
									<Link to="/">{getText('navbar.firstElement')}</Link>
								</li>
								<li>
									<Link to="/settings">{getText('navbar.secondElement')}</Link>
								</li>
								<li>
									<Link to="/about">{getText('navbar.thirdElement')}</Link>
								</li>
								<li>
									<ThemeController></ThemeController>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
					<ul className="menu main-content-color min-h-full w-80 p-4">
						{/* Sidebar content here */}
						<div className="flex justify-start">
							<li>
								<ThemeController></ThemeController>
							</li>
						</div>
						<li>
							<Link to="/">{getText('navbar.firstElement')}</Link>
						</li>
						<li>
							<Link to="/settings">{getText('navbar.secondElement')}</Link>
						</li>
						<li>
							<Link to="/about">{getText('navbar.thirdElement')}</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;
