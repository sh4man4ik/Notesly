import { Link } from 'react-router-dom';
import getText from '../../shared/texts/texts.ts';

function Hero() {
	return (
		<>
			<div className="hero margin-top w-[90%] mx-auto">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">{getText('hero.title')}</h1>
						<p className="py-6">{getText('hero.subtitle')}</p>
						<Link to="/">
							<button className="btn btn-accent">{getText('hero.button')}</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
