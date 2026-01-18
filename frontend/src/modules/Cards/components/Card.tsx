function Card(props: any) {
	return (
		<>
			<div className="card card-border bg-base-300 text-base-content w-96">
				<div className="card-body">
					<h2 className="card-title">{props.title}</h2>
					<p>{props.text}</p>
				</div>
			</div>
		</>
	);
}

export default Card;
