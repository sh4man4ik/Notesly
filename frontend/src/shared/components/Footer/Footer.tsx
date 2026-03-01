import getText from '../../texts/texts.ts';

function Footer() {
	return (
		<>
			<footer className="border-t border-base-200 margin-top footer sm:footer-horizontal footer-center main-content-color p-4 small-font">
				<aside>
					<p>{getText('footer.text')}</p>
				</aside>
			</footer>
		</>
	);
}

export default Footer;
