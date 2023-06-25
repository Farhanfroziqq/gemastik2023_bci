import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Rooms from "../components/Rooms";
import Offers from "../components/Offers";
import Plan from "../components/Plan";
import Footer from "../components/Footer";

function LandingPage() {
	return <div>
		<Navbar/>
		<Hero/>
		<Offers/>
		<Plan/>
		<Rooms/>
		<Footer/>
	</div>;
}
export default LandingPage;