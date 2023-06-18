import React, { useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import Status from "../components/dashboard/Status";
import ProfileModal from "../components/dashboard/ProfileModal";

const Dashboard = () => {
	const [profile, setProfile] = useState(false);
	const handleProfile = () => {
		setProfile(!profile);
	};
	return (
		<div className='relative h-screen'>
			<div
				className={`absolute w-full h-screen backdrop-blur-sm z-50 ${
					profile ? "block" : "hidden "
				}`}
			>
				<ProfileModal props={handleProfile} />
			</div>
			<div className='absolute right-[50px] top-[50px]' onClick={handleProfile}>
				<Navbar />
			</div>
			<div className='absolute right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%]'>
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
			</div>
		</div>
	);
};

export default Dashboard;
