import React from "react";
import axios from "axios";

const LoginTest = () => {
	const apiLink = "http://127.0.0.1:8000/api/login";

	const headers = {
		"Content-Type": "application/json",
	};

	const user = {
		user_email: "fajarshiddiqqq@gmail.com",
		user_password: "123",
	};

	const loginFunction = async () => {
		try {
			const response = await axios.post(apiLink, user, { headers });
			console.log(response);
		} catch (error) {
			console.error("Error login:", error);
		}
	};

	return (
		<div>
			<button
				onClick={loginFunction}
				className='border px-3 py-2 my-5 w-32 bg-slate-100'
			>
				Login Test
			</button>
		</div>
	);
};

export default LoginTest;
