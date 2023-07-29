import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ProgressBar from "./ProgressBar";

const Status = ({ props }) => {
	const formatDate = () => {
		const date = new Date();
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		const day = days[date.getDay()];
		const month = months[date.getMonth()];
		const year = date.getFullYear();
		const dateNumber = date.getDate();
		return `${day}, ${dateNumber} ${month} ${year}`;
	};

	return (
		<div className='border rounded-lg shadow-lg px-16'>
			<h1 className='text-5xl font-semibold my-12'>Dashboard</h1>

			{/* Section 1 */}
			<div className='mb-5'>
				<h2 className='text-lg font-semibold'>Nutrition Status</h2>
				<hr className='my-2' />
				<p className='text-slate-500'>{formatDate()}</p>
				<p className='text-red-500 text-2xl text-center my-5'>
					Not Enough Meal!
				</p>
				<div className='w-full h-fit overflow-hidden '>
					<ProgressBar />
				</div>
			</div>

			{/* Section 2 */}
			<div>
				<h2 className='font-semibold text-lg my-2'>Meal Input</h2>
				<hr />
				<div className='py-12 flex items-center justify-center'>
					<button
						className='flex items-center text-slate-500 cursor-text border border-slate-500 rounded-full px-3 py-2 w-[300px] relative text-center justify-center'
						onClick={props}
					>
						<AiOutlineSearch size={30} className='absolute left-5' />
						Type to search
					</button>
				</div>
			</div>
		</div>
	);
};

export default Status;
