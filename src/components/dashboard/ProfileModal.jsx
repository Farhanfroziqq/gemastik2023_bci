import React from "react";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProfileModal = ({ props }) => {
	return (
		<div className='absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] border rounded-md shadow-md px-4 py-4 flex flex-row bg-white'>
			<div className='w-24 h-24 rounded-full overflow-hidden bg-black hover:bg-slate-900 cursor-pointer'></div>
			<div className='ml-4'>
				<h2 className='font-bold text-lg'>fajarshiddiqqq</h2>
				<h3 className='text-sm mb-3'>fajarshiddiqqq@gmail.com</h3>
				<Link
					to='userprofile'
					className='flex items-center cursor-pointer group'
				>
					<AiOutlineEdit className='group-hover:opacity-50' />
					<h3 className='ml-2 text-sm group-hover:opacity-70'>Settings</h3>
				</Link>
			</div>
			<div className='ml-4'>
				<AiOutlineClose onClick={props} className='cursor-pointer' size={20} />
			</div>
		</div>
	);
};

export default ProfileModal;
