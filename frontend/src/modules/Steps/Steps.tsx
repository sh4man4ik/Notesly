import Title from '../../shared/ui/Title/Title.tsx';
import getText from '../../shared/texts/texts.ts';

function Steps() {
	return (
		<>
			<div className="margin-top">
				<div className="margin-bottom">
					<Title text={getText('steps.title')}></Title>
				</div>
				<div className="w-[90%] mx-auto">
					<ul className="timeline timeline-vertical">
						<li>
							<div className="timeline-middle">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="h-5 w-5"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div className="timeline-start timeline-box medium-font main-content-color">
								{getText('steps.firstStep')}
							</div>
							<hr />
						</li>
						<li>
							<hr />
							<div className="timeline-middle">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="h-5 w-5"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div className="timeline-end timeline-box medium-font main-content-color">
								{getText('steps.secondStep')}
							</div>
							<hr />
						</li>
						<li>
							<hr />
							<div className="timeline-middle">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="h-5 w-5"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div className="timeline-start timeline-box medium-font main-content-color">
								{getText('steps.thirdStep')}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Steps;
