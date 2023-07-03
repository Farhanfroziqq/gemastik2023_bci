import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Status = ({ props }) => {
	return (
		<div className='border rounded-lg shadow-lg px-16'>
			<h1 className='text-5xl font-semibold my-12'>Dashboard</h1>

			{/* Section 1 */}
			<div>
				<h2 className='text-lg font-semibold'>Nutrition Status</h2>
				<hr className='my-2' />
				<p className='text-slate-500'>Saturday, 24 June 2023</p>
				<p className='text-red-500 text-2xl text-center my-5'>
					Not Enough Meal!
				</p>
				<div>
					{/* progress bar */}
					<div>{/* Calories */}</div>
					<div>{/* Carbohidrate */}</div>
					<div>{/* Protein */}</div>
					<div>{/* Fat */}</div>
				</div>
			</div>

			{/* Section 2 */}
			<div>
				<h2 className='font-semibold text-lg mb-2'>Meal Input</h2>
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
