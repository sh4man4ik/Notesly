import { Link } from 'react-router-dom';
import getText from '../../shared/texts/texts.ts';

function Hero() {
	return (
		<>
			<div className="hero margin-top w-[90%] mx-auto">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<span className="text-rotate text-5xl sm:text-7xl duration-5000">
							<span className="justify-items-center">
								<span>{getText('hero.title.firstWord')}</span>
								<span>{getText('hero.title.secondWord')}</span>
								<span>{getText('hero.title.thirdWord')}</span>
							</span>
						</span>
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
