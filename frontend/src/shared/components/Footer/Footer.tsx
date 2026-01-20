import getText from '../../texts/texts.ts';

function Footer() {
	return (
		<>
			<footer className="margin-top footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4">
				<aside>
					<p>{getText('footer.text')}</p>
				</aside>
			</footer>
		</>
	);
}

export default Footer;
