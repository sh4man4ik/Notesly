function Card(props: any) {
	let openGitHubRepo = () => {
		window.open('https://github.com/sh4man4ik/Notesly', '_blank');
	};

	return (
		<>
			<div className="card card-border main-content-color w-96">
				<div className="card-body">
					<div className="flex items-center gap-3">
						<div>{props.icon}</div>
						<h2 className="card-title medium-font">{props.title}</h2>
					</div>
					<p className="small-font">{props.text}</p>
					<div className="card-actions justify-end">
						{props.button ? (
							<button className="btn btn-outline btn-accent small-font" onClick={openGitHubRepo}>
								{props.button}
							</button>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
