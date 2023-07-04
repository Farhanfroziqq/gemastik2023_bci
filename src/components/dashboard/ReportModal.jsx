import React from "react";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import ReportNav from "./userreport/ReportNav";

const ReportModal = ({ props }) => {
	return (
		<div className='absolute top-[14%] right-[50%] translate-x-[50%]  rounded-md shadow-md px-12 py-12 flex flex-col bg-white  w-full md:w-3/5  h-[70vh]'>
			<div className='top-0 left-0 absolute bg-blue-500 w-4 h-full '></div>
			<div className='absolute flex justify-end top-10 right-10'>
				<AiOutlineClose onClick={props} className='cursor-pointer' size={20} />
			</div>
			<div className='mb-12'>
				<h3 className='text-5xl font-semibold'>Reports</h3>
			</div>
			<ReportNav />
		</div>
	);
};

export default ReportModal;
