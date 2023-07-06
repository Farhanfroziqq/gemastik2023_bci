import React from "react";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import ProfileNav from "./userprofile/ProfileNav";

const ProfileModal = ({ props }) => {
	return (
		<div className='absolute top-[14%] right-[50%] translate-x-[50%]  border rounded-md shadow-md px-16 py-4 flex flex-col bg-white w-full max-w-[1000px] '>
			<div className='top-0 left-0 absolute bg-blue-500 w-4 h-full'></div>
			<div className='relative flex justify-end'>
				<AiOutlineClose onClick={props} className='cursor-pointer' size={20} />
			</div>
			<div className=''>
				<h3 className='text-3xl font-bold'>USER PROFILE</h3>
			</div>
			<ProfileNav />
		</div>
	);
};

export default ProfileModal;
