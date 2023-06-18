import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
	return (
		<div className='absolute top-[50%] left-[50%] text-center'>
			<Link to='/dashboard' className='w-full h-screen '>
				<h3>User Profile</h3>
				Click me!
			</Link>
		</div>
	);
};

export default UserProfile;
