import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function app(){
	return <div>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage/>}/>
				<Route path="/Register" element={<Register/>}></Route>
			</Routes>

		
		</BrowserRouter>
	</div>
}

export default app
