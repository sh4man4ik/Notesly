import getText from '../../shared/texts/texts.ts';

function Steps() {
	return (
		<>
			<div className="margin-top">
				<ul className="timeline timeline-vertical">
					<li>
						<div className="timeline-start timeline-box main-content-color">
							{getText('steps.firstStep')}
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div className="timeline-end timeline-box main-content-color">
							{getText('steps.secondStep')}
						</div>
						<hr />
					</li>
					<li>
						<hr />
						<div className="timeline-start timeline-box main-content-color">
							{getText('steps.thirdStep')}
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Steps;
