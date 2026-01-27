import Navbar from '../../shared/components/Navbar/Navbar';
import Hero from '../../modules/Hero';
import Cards from '../../modules/Cards';
import Steps from '../../modules/Steps';
import FAQ from '../../modules/FAQ';
import Footer from '../../shared/components/Footer/Footer';

function AboutPage() {
	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
			<Cards></Cards>
			<Steps></Steps>
			<FAQ></FAQ>
			<Footer></Footer>
		</>
	);
}

export default AboutPage;
