import React, { useState } from "react";
import Status from "../components/dashboard/Status";
import ProfileModal from "../components/dashboard/ProfileModal";
import UserProfileButton from "../components/dashboard/UserProfileButton";
import ReportButton from "../components/dashboard/ReportButton";
import ReportModal from "../components/dashboard/ReportModal";

const Dashboard = () => {
	const [profile, setProfile] = useState("");
	const [report, setReport] = useState("");
	const handleProfile = () => {
		setProfile(!profile);
	};
	const handleReport = () => {
		setReport(!report);
	};
	return (
		<div className='relative h-screen'>
			{/* Floating User profile and reports button */}
			<div className='absolute right-[50px] top-[50px] flex items-center flex-col'>
				<div className='' onClick={handleProfile}>
					<UserProfileButton />
				</div>
				<div onClick={handleReport}>
					<ReportButton />
				</div>
			</div>

			{/* Profile Modal */}
			<div
				className={`absolute w-full h-screen backdrop-blur-sm z-50 ${
					profile ? "block" : "hidden "
				}`}
			>
				<ProfileModal props={handleProfile} />
			</div>

			{/* Report Modal */}
			<div
				className={`absolute w-full h-screen backdrop-blur-sm z-50 ${
					report ? "block" : "hidden "
				}`}
			>
				<ReportModal props={handleReport} />
			</div>

			{/* Input Modal */}

			{/* Main Dashboard Content */}
			<div className='absolute right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%]'>
				<Status />
			</div>
		</div>
	);
};

export default Dashboard;
