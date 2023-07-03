import React from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const MealInputModal = ({ props }) => {
	return (
		<div className='absolute top-[15%] right-[50%] translate-x-[50%] border rounded-md shadow-md px-12 py-12 flex flex-col bg-white w-full md:w-3/5'>
			<div className='top-0 left-0 absolute bg-blue-500 w-4 h-full '></div>

			<div className='absolute flex justify-end top-10 right-10'>
				<AiOutlineClose onClick={props} className='cursor-pointer' size={20} />
			</div>
			<h3 className='text-3xl font-bold'>What did you eat today?</h3>
			<div className='w-full flex justify-center items-center py-12 relative'>
				<div className=' rounded-full px-6 py-3 absolute w-full max-w-lg -z-10'>
					<AiOutlineSearch style={{ color: "gray" }} size={25} />
				</div>
				<input
					type='text'
					placeholder={`Type to search`}
					autoFocus
					className='border border-gray-500 rounded-full px-24 py-3 z-10 bg-transparent w-full max-w-lg'
				/>
			</div>
			{/* <ReportNav /> */}
		</div>
	);
};

export default MealInputModal;
