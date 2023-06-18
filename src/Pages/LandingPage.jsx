import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Rooms from "../components/Rooms";
import Offers from "../components/Offers";
import Plan from "../components/Plan";

function LandingPage() {
	return <div>
		<Navbar/>
		<Hero/>
		<Offers/>
		<Plan/>
		<Rooms/>
	</div>;
}
export default LandingPage;