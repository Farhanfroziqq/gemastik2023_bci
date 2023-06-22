import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const api = "http://localhost:8000/api/users";
		axios
			.get(api)
			.then((response) => response.data)
			.then((data) => setUsers(data));
	}, []);

	const handleSearch = (event) => {
		console.log(event.target.value);
		setSearchQuery(event.target.value);
	};

	const filteredUsers = users.filter(
		(user) =>
			user.user_name &&
			user.user_name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className='m-5'>
			<h1>User List</h1>
			<input
				type='text'
				placeholder='Search for users'
				value={searchQuery}
				onChange={handleSearch}
				className='border p-2 focus:outline-none'
			/>
			<ul>
				{searchQuery === ""
					? ""
					: filteredUsers.map((user) => (
							<li key={user.user_id}>{user.user_name}</li>
					  ))}
			</ul>
		</div>
	);
};

export default UserList;
