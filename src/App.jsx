import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { Users, UserDetail, LoginTest } from "./testing";
import User_Input from "./Pages/User_Input";
import UserList from "./testing/UserList";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/Login/Userinput' element={<User_Input />} />

					{/* Testing Route */}
					<Route path='/userstesting' element={<Users />} />
					<Route path='/userdetailtesting' element={<UserDetail />} />
					<Route path='/logintesting' element={<LoginTest />} />
					<Route path='/userlisttesting' element={<UserList />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
