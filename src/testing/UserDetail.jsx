import React from "react";
import axios from "axios";

const UserDetail = () => {
	const apiLink = "http://127.0.0.1:8000/api/userdetail";

	const headers = {
		"Content-Type": "application/json",
	};

	const formData = {
		user_id: 1,
		user_full_name: "Muhammad Fajar Ash Shiddiq",
		user_birth_date: "2003-07-15",
		user_gender: "male",
		user_weight: "50",
		user_height: "167",
		user_province: "Yogyakarta",
		user_city: "Ngemplak",
		user_district: "Sleman",
	};

	const formDataUpdate = {
		user_id: 1,
		user_full_name: "Muhammad Fajar Ash Shiddiq Updated",
		user_birth_date: "2003-07-20",
		user_gender: "female",
		user_weight: "53",
		user_height: "170",
		user_province: "Jakarta",
		user_city: "Jakarta Utara",
		user_district: "Cilincing",
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
		<div>
			<div className='flex flex-col'>
				<button
					onClick={getFunction}
					className='border px-3 py-2 my-5 w-32 bg-slate-100'
				>
					GET ALL USER DETAIL
				</button>
				<button
					onClick={getOneFunction}
					className='border px-3 py-2 my-5 w-32 bg-slate-100'
				>
					GET SPESIFIC USER DETAIL
				</button>
				<button
					onClick={postFunction}
					className='border px-3 py-2 my-5 w-32 bg-slate-100'
				>
					POST USER DETAIL
				</button>
				<button
					onClick={putFunction}
					className='border px-3 py-2 my-5 w-32 bg-slate-100'
				>
					PUT USER DETAIL
				</button>
				<button
					onClick={destroyFunction}
					className='border px-3 py-2 my-5 w-32 bg-slate-100'
				>
					DELETE USER DETAIL
				</button>
			</div>
		</div>
	);
};

export default UserDetail;
