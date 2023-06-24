import React from "react";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProfileModal = ({ props }) => {
	return (
		<div className='absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] border rounded-md shadow-md px-4 py-4 flex flex-col bg-white w-1/3'>
			<div className='relative flex justify-end'>
				<AiOutlineClose onClick={props} className='cursor-pointer' size={20} />
			</div>
			<div className="flex mx-auto mb-8">
				<div className="grid grid-cols-3 gap-4 items-center justify-between py-4 mx-12">
					<div className='w-24 h-24 rounded-full overflow-hidden bg-black hover:bg-slate-900 cursor-pointer'></div>
					<h1 className="text-base col-span-2 text-start">Hallo M fajar Shidiq, your Body Condition was good right now <br/><span className="underline cursor-pointer text-blue-400 hover:text-blue-600">click here</span> to see your report progress</h1>
				</div>
			</div>
			<div className='flex mx-auto'>
				<div className="border bg-slate-200 rounded-md grid grid-cols-3 gap-4">
					<div className="text-lg px-4 border-r border-black my-2 align-middle inline-grid">
						<h3>Username</h3>
						<h3>Name</h3>
						<h3>Email</h3>
					</div>
					<div className="text-base my-2 align-middle inline-grid col-span-2">
						<p className=''>fajarshiddiqqq</p>
						<p className=''>M Fajar Shiddiq</p>
						<p className=''>fajarshiddiqqq@gmail.com</p>
					</div>
				</div>
			</div>
				<Link
					to='userprofile'
					className='flex items-center cursor-pointer group justify-center py-4'
				>
					<AiOutlineEdit className='group-hover:opacity-50' />
					<h3 className='ml-2 text-sm group-hover:opacity-70'>Settings</h3>
				</Link>
			
		</div>
	);
};

export default ProfileModal;
