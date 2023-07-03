import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const MealInputModal = ({ props, inputRef }) => {
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		if (props) {
			setInputValue("");
		}
	}, [props]);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	return (
		<div className='absolute top-[15%] right-[50%] translate-x-[50%] rounded-md shadow-md px-12 py-12 flex flex-col bg-white w-full md:w-3/5 max-h-[70vh]'>
			{/* Blue accent */}
			<div className='top-0 left-0 absolute bg-blue-500 w-4 h-full '></div>
			{/* Close Button */}
			<div className='absolute flex justify-end top-10 right-10'>
				<AiOutlineClose onClick={props} className='cursor-pointer' size={20} />
			</div>
			{/* Modal Header */}
			<h1 className='text-5xl font-bold'>What did you eat today?</h1>
			{/* Text Input */}
			<div className='w-full flex justify-center items-center py-12 relative'>
				<div className=' rounded-full px-6 py-3 absolute w-full max-w-2xl -z-10'>
					<AiOutlineSearch style={{ color: "gray" }} size={25} />
				</div>
				<input
					type='text'
					placeholder={`Type to search`}
					value={inputValue}
					onChange={handleInputChange}
					ref={inputRef}
					className='border border-gray-500 rounded-full px-24 py-3 z-10 bg-transparent w-full max-w-2xl'
				/>
			</div>
			{/* Meal Cart */}
			<div className='hidden'>
				<h3 className='font-semibold mb-2'>Selected Meal :</h3>
				<hr />
				<table className='w-full mt-10 table-auto'>
					<thead className='border-b font-semibold'>
						<tr>
							<th className='pb-2'></th>
							<th className='pb-2'>Name</th>
							<th className='pb-2'>Calories</th>
							<th className='pb-2'>Carbs</th>
							<th className='pb-2'>Protein</th>
							<th className='pb-2'>Fat</th>
							<th className='pb-2'>Count</th>
							<th className='pb-2'>Action</th>
						</tr>
					</thead>
					<tbody className='text-center opacity-60'>
						<tr>
							<td className='py-3'>1</td>
							<td className='py-3'>Boiled Egg</td>
							<td className='py-3'>90kcal</td>
							<td className='py-3'>90g</td>
							<td className='py-3'>90g</td>
							<td className='py-3'>90g</td>
							<td className='py-3'>1</td>
							<td className='py-3'>
								<button>
									<FiTrash2 color='red' />
								</button>
							</td>
						</tr>
					</tbody>
					<tfoot className='text-center border-t font-semibold'>
						<tr>
							<td className='py-3'></td>
							<td className='py-3'>Total</td>
							<td className='py-3'>90kcal</td>
							<td className='py-3'>90g</td>
							<td className='py-3'>90g</td>
							<td className='py-3'>90g</td>
							<td className='py-3'>1</td>
							<td className='w-32'>
								<button className='text-white font-semibold border bg-blue-500 hover:bg-blue-400 rounded-full px-4 py-2'>
									Submit
								</button>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
			{/* List of Meal */}
			<div className=' overflow-hidden overflow-y-auto'>
				<h3 className='font-semibold mb-2'>Choose your meal :</h3>
				<hr />
				<div className='flex mt-10 w-full'>
					<div className='pr-12'>
						<h4>1</h4>
					</div>
					<div className=''>
						<h3 className='font-semibold text-lg mb-3'>Boiled Egg</h3>
						<div className='flex text-sm'>
							<div className='mr-5 flex flex-col font-semibold gap-3'>
								<h4>Calories</h4>
								<h4>Carbs</h4>
								<h4>Protein</h4>
								<h4>Fat</h4>
							</div>
							<div className='border-l flex flex-col pl-5 gap-3'>
								<h4>230kcal</h4>
								<h4>90g</h4>
								<h4>200g</h4>
								<h4>5g</h4>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center w-full'>
						<h3 className='font-semibold mb-2'>Count</h3>
						<input
							type='number'
							className='border border-black rounded-md text-center w-16'
							placeholder='0'
							min={0}
						/>
					</div>
					<div className='flex flex-col items-center justify-center gap-3 mx-4'>
						<button className='border border-black rounded-md w-24 py-1'>
							Detail
						</button>
						<button className='border border-black rounded-md w-24 py-1'>
							Select
						</button>
					</div>
				</div>
				<div className='flex mt-10 w-full'>
					<div className='pr-12'>
						<h4>1</h4>
					</div>
					<div className=''>
						<h3 className='font-semibold text-lg mb-3'>Boiled Egg</h3>
						<div className='flex text-sm'>
							<div className='mr-5 flex flex-col font-semibold gap-3'>
								<h4>Calories</h4>
								<h4>Carbs</h4>
								<h4>Protein</h4>
								<h4>Fat</h4>
							</div>
							<div className='border-l flex flex-col pl-5 gap-3'>
								<h4>230kcal</h4>
								<h4>90g</h4>
								<h4>200g</h4>
								<h4>5g</h4>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center w-full'>
						<h3 className='font-semibold mb-2'>Count</h3>
						<input
							type='number'
							className='border border-black rounded-md text-center w-16 opacity-100'
							placeholder='0'
							min={0}
						/>
					</div>
					<div className='flex flex-col items-center justify-center gap-3 mx-4'>
						<button className='border border-black rounded-md w-24 py-1'>
							Detail
						</button>
						<button className='border border-black rounded-md w-24 py-1'>
							Select
						</button>
					</div>
				</div>
				<div className='flex mt-10 w-full'>
					<div className='pr-12'>
						<h4>1</h4>
					</div>
					<div className=''>
						<h3 className='font-semibold text-lg mb-3'>Boiled Egg</h3>
						<div className='flex text-sm'>
							<div className='mr-5 flex flex-col font-semibold gap-3'>
								<h4>Calories</h4>
								<h4>Carbs</h4>
								<h4>Protein</h4>
								<h4>Fat</h4>
							</div>
							<div className='border-l flex flex-col pl-5 gap-3'>
								<h4>230kcal</h4>
								<h4>90g</h4>
								<h4>200g</h4>
								<h4>5g</h4>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center w-full'>
						<h3 className='font-semibold mb-2'>Count</h3>
						<input
							type='number'
							className='border border-black rounded-md text-center w-16'
							placeholder='0'
							min='0'
						/>
					</div>
					<div className='flex flex-col items-center justify-center gap-3 mx-4'>
						<button className='border border-black rounded-md w-24 py-1'>
							Detail
						</button>
						<button className='border border-black rounded-md w-24 py-1'>
							Select
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MealInputModal;
