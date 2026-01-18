import getText from '../../shared/texts/texts.ts';
import Card from './components/Card';

function Cards() {
	return (
		<>
			<div className="margin-top flex flex-wrap justify-center gap-6 w-[90%] max-w-6xl mx-auto">
				<Card title={getText('cards.firstCard.title')} text={getText('cards.firstCard.text')}></Card>
				<Card title={getText('cards.secondCard.title')} text={getText('cards.secondCard.text')}></Card>
				<Card title={getText('cards.thirdCard.title')} text={getText('cards.thirdCard.text')}></Card>
				<Card title={getText('cards.fourthCard.title')} text={getText('cards.fourthCard.text')}></Card>
			</div>
		</>
	);
}

export default Cards;
