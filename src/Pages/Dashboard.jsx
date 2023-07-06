import React, { useState, useEffect, useRef } from "react";
import Status from "../components/dashboard/Status";
import ProfileModal from "../components/dashboard/ProfileModal";
import UserProfileButton from "../components/dashboard/UserProfileButton";
import ReportButton from "../components/dashboard/ReportButton";
import ReportModal from "../components/dashboard/ReportModal";
import MealInputModal from "../components/dashboard/mealInput/MealInputModal";
import ProgressBar from "../components/dashboard/ProgressBar";

const Dashboard = () => {
	const [profile, setProfile] = useState(false);
	const [report, setReport] = useState(false);
	const [mealInput, setMealInput] = useState(false);

	const mealInputRef = useRef(null);
	const handleProfile = () => {
		setProfile(!profile);
		if (!profile) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	};

	const handleReport = () => {
		setReport(!report);
		if (!report) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	};

	const handleMealInput = () => {
		setMealInput(!mealInput);
		if (!mealInput) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	};
	useEffect(() => {
		if (mealInput) {
			mealInputRef.current.focus();
		}
	}, [mealInput]);

	return (
		<div className='relative overflow-hidden w-full flex flex-row-reverse justify-between'>
			{/* Floating User profile and reports button */}
			<div className='mx-12 my-24 flex items-center flex-col '>
				<div className='' onClick={handleProfile}>
					<UserProfileButton />
				</div>
				<p className='text-gray-500 text-center mb-6'>
					Click to update your information!
				</p>
				<div onClick={handleReport} className='w-full'>
					<ReportButton />
				</div>
			</div>

			{/* Profile Modal */}
			<div
				className={`absolute w-full h-screen backdrop-blur-sm z-50 ${
					profile ? "block " : "hidden "
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

			{/* Meal Input Modal */}
			<div
				className={`absolute w-full h-screen backdrop-blur-sm z-50 ${
					mealInput ? "block" : "hidden "
				}`}
			>
				<MealInputModal props={handleMealInput} inputRef={mealInputRef} />
			</div>

			{/* Main Dashboard Content */}
			<div className='w-full relative ml-20 my-16 h-fit'>
				<div className='top-0 left-0 absolute bg-blue-500 w-4 h-full '></div>
				<Status props={handleMealInput} />
			</div>
		</div>
	);
};

export default Dashboard;
