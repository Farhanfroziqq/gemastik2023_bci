import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import UserProfile from "./components/dashboard/userprofile/UserProfile";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/dashboard/userprofile' element={<UserProfile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
