import getText from '../../shared/texts/texts.ts';
import Card from './components/Card';
import Title from '../../shared/ui/Title/Title.tsx';
import { RiCloseLargeLine, RiGithubFill, RiLoopLeftLine, RiWallet3Line } from '@remixicon/react';

function Cards() {
	return (
		<>
			<div className="margin-top">
				<Title text={getText('cards.title')}></Title>
				<div className="flex flex-wrap justify-center gap-6 w-[90%] max-w-6xl mx-auto">
					<Card
						icon={<RiCloseLargeLine />}
						title={getText('cards.firstCard.title')}
						text={getText('cards.firstCard.text')}
						button={getText('cards.firstCard.button')}
					></Card>
					<Card
						icon={<RiGithubFill />}
						title={getText('cards.secondCard.title')}
						text={getText('cards.secondCard.text')}
						button={getText('cards.secondCard.button')}
					></Card>
					<Card
						icon={<RiLoopLeftLine />}
						title={getText('cards.thirdCard.title')}
						text={getText('cards.thirdCard.text')}
						button={getText('cards.thirdCard.button')}
					></Card>
					<Card
						icon={<RiWallet3Line />}
						title={getText('cards.fourthCard.title')}
						text={getText('cards.fourthCard.text')}
						button={getText('cards.fourthCard.button')}
					></Card>
				</div>
			</div>
		</>
	);
}

export default Cards;
