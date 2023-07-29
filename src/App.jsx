import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, Register, Login, Dashboard, UserInput } from "./pages";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					{/* Landing Page */}
					<Route path='/' element={<LandingPage />} />
					{/* Authentication */}
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/login/details' element={<UserInput />} />
					{/* Dasboard */}
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
