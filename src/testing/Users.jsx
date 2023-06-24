import React from "react";
import axios from "axios";

const User = () => {
	const apiLink = "http://127.0.0.1:8000/api/users";

	const headers = {
		"Content-Type": "application/json",
	};

	const formData = {
		user_name: "fajarshiddiqqq",
		user_email: "fajarshiddiqqq@gmail.com",
		user_password: "123",
		user_status: "incomplete",
	};

	const formDataUpdate = {
		user_name: "fajarshiddiqqq",
		user_email: "fajarshiddiqqq@gmailupdated",
		user_password: "123Updated",
		user_status: "complete",
	};

	const getFunction = async () => {
		try {
			const response = await axios.get(apiLink);
			console.log(response);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	const getOneFunction = async () => {
		try {
			const response = await axios.get(apiLink + "/1");
			console.log(response);
		} catch (error) {
			console.error("Error fetching user:", error);
		}
	};

	const postFunction = async () => {
		try {
			const response = await axios.post(apiLink, formData, { headers });
			console.log(response);
		} catch (error) {
			console.error("Error creating user:", error);
		}
	};

	const putFunction = async () => {
		try {
			const response = await axios.put(apiLink + "/1", formDataUpdate, {
				headers,
			});
			console.log(response);
		} catch (error) {
			console.error("Error updating user:", error);
		}
	};

	const destroyFunction = async () => {
		try {
			const response = await axios.delete(apiLink + "/1");
			console.log(response);
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	return (
		<div className='flex flex-col'>
			<button
				onClick={getFunction}
				className='border px-3 py-2 my-5 w-32 bg-slate-100'
			>
				GET ALL
			</button>
			<button
				onClick={getOneFunction}
				className='border px-3 py-2 my-5 w-32 bg-slate-100'
			>
				GET SPESIFIC
			</button>
			<button
				onClick={postFunction}
				className='border px-3 py-2 my-5 w-32 bg-slate-100'
			>
				POST
			</button>
			<button
				onClick={putFunction}
				className='border px-3 py-2 my-5 w-32 bg-slate-100'
			>
				PUT
			</button>
			<button
				onClick={destroyFunction}
				className='border px-3 py-2 my-5 w-32 bg-slate-100'
			>
				DELETE
			</button>
		</div>
	);
};

export default User;
