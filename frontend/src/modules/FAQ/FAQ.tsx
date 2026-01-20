import getText from '../../shared/texts/texts.ts';

function FAQ() {
	return (
		<>
			<div className="margin-top grid gap-2 w-[90%] max-w-2xl mx-auto">
				<div className="collapse collapse-arrow main-content-color border border-base-300">
					<input type="radio" name="my-accordion-2" defaultChecked />
					<div className="collapse-title font-semibold medium-font">{getText('FAQ.firstQuestion.title')}</div>
					<div className="collapse-content small-font">{getText('FAQ.firstQuestion.text')}</div>
				</div>
				<div className="collapse collapse-arrow main-content-color border border-base-300">
					<input type="radio" name="my-accordion-2" />
					<div className="collapse-title font-semibold medium-font">
						{getText('FAQ.secondQuestion.title')}
					</div>
					<div className="collapse-content small-font">{getText('FAQ.secondQuestion.text')}</div>
				</div>
				<div className="collapse collapse-arrow main-content-color border border-base-300">
					<input type="radio" name="my-accordion-2" />
					<div className="collapse-title font-semibold medium-font">{getText('FAQ.thirdQuestion.title')}</div>
					<div className="collapse-content small-font">{getText('FAQ.thirdQuestion.text')}</div>
				</div>
			</div>
		</>
	);
}

export default FAQ;
