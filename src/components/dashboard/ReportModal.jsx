import React from "react";
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import ReportNav from "./userreport/ReportNav";

const ReportModal = ({ props }) => {
	return (
		<div className='absolute top-[15%]  right-[50%] translate-x-[50%]  border rounded-md shadow-md px-6 py-12 flex flex-col bg-white w-full md:w-1/2'>
			<div className='absolute flex justify-end top-10 right-10'>
				<AiOutlineClose onClick={props} className='cursor-pointer' size={20} />
			</div>
			<div>
				<h3 className='text-3xl font-bold'>Report & History</h3>
			</div>
			<ReportNav />
		</div>
	);
};

export default ReportModal;
