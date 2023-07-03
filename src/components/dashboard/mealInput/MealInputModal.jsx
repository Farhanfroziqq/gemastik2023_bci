import React, { useState, useRef } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import data from "../../../assets/data";

const MealInputModal = ({ props, inputRef }) => {
	const [inputValue, setInputValue] = useState("");
	const [searchInterface, setSearchInterface] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		setSearchInterface(e.target.value !== "");
	};

	const filteredMeals = data.filter(
		(m) =>
			m.meal_name &&
			m.meal_name.toLowerCase().includes(inputValue.toLowerCase())
	);

	const addToCart = (meal) => {
		console.log(meal);
		setCartItems((prevItems) => [...prevItems, meal]);
		setSearchInterface(!setSearchInterface);
		setInputValue("");
	};

	const removeFromCart = (index) => {
		setCartItems((prevItems) => prevItems.filter((item, i) => i !== index));
	};

	const handleSubmit = () => {
		setCartItems([]);
	};

	const MealCart = () => {
		let cal_tot = 0;
		let carb_tot = 0;
		let pro_tot = 0;
		let fat_tot = 0;
		let count_tot = 0;

		cartItems.forEach((meal, index) => {
			cal_tot += meal.meal_calories;
			carb_tot += meal.meal_carbs;
			pro_tot += meal.meal_protein;
			fat_tot += meal.meal_fat;
			count_tot += meal.meal_count;
		});
		if (cartItems.length > 0) {
			return (
				<div className=''>
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
							{cartItems.map((meal, index) => (
								<tr key={index}>
									<td className='py-3'>{index + 1}</td>
									<td className='py-3'>{meal.meal_name}</td>
									<td className='py-3'>{meal.meal_calories}kcal</td>
									<td className='py-3'>{meal.meal_carbs}g</td>
									<td className='py-3'>{meal.meal_protein}g</td>
									<td className='py-3'>{meal.meal_fat}g</td>
									<td className='py-3'>{meal.meal_count}</td>
									<td className='py-3'>
										<button onClick={() => removeFromCart(index)}>
											<FiTrash2 color='red' />
										</button>
									</td>
								</tr>
							))}
						</tbody>
						<tfoot className='text-center border-t font-semibold'>
							<tr>
								<td className='py-3'></td>
								<td className='py-3'>Total</td>
								<td className='py-3'>{cal_tot}kcal</td>
								<td className='py-3'>{carb_tot}g</td>
								<td className='py-3'>{pro_tot}g</td>
								<td className='py-3'>{fat_tot}g</td>
								<td className='py-3'>{count_tot}</td>
								<td className='w-32'>
									<button
										onClick={handleSubmit}
										className='text-white font-semibold border bg-blue-500 hover:bg-blue-400 rounded-full px-4 py-2'
									>
										Submit
									</button>
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
			);
		} else {
			return (
				<div>
					<h3 className='font-semibold mb-2 '>Selected Meal :</h3>
					<hr />
					<h3 className='text-center mt-12 italic text-gray-400 select-none'>
						No Meal Selected
					</h3>
				</div>
			);
		}
	};

	const ListOfMeal = () => {
		const [mealCounts, setMealCounts] = useState({});

		const handleCountChange = (mealId, count) => {
			setMealCounts((prevCounts) => ({
				...prevCounts,
				[mealId]: count,
			}));
		};
		return (
			<div className='overflow-hidden overflow-y-auto'>
				<h3 className='font-semibold mb-2'>Choose your meal :</h3>
				<hr />
				{inputValue === ""
					? ""
					: filteredMeals.map((m, index) => (
							<div className='flex mt-10 w-full' key={index}>
								<div className='pr-12'>
									<h4>{index + 1}</h4>
								</div>
								<div>
									<h3 className='font-semibold text-lg mb-3' key={m.meal_id}>
										{m.meal_name}
									</h3>
									<div className='flex text-sm'>
										<div className='mr-5 flex flex-col font-semibold gap-3'>
											<h4>Calories</h4>
											<h4>Carbs</h4>
											<h4>Protein</h4>
											<h4>Fat</h4>
										</div>
										<div className='border-l flex flex-col pl-5 gap-3'>
											<h4>{m.meal_calories}kcal</h4>
											<h4>{m.meal_carbs}g</h4>
											<h4>{m.meal_protein}g</h4>
											<h4>{m.meal_fat}g</h4>
										</div>
									</div>
								</div>
								<div className='flex flex-col items-center justify-center w-full'>
									<h3 className='font-semibold mb-2'>Count</h3>
									<input
										type='number'
										className='border border-black rounded-md text-center w-16'
										placeholder='0'
										min={1}
										value={mealCounts[m.meal_id] || 1}
										onChange={(e) =>
											handleCountChange(m.meal_id, parseInt(e.target.value))
										}
									/>
								</div>
								<div className='flex flex-col items-center justify-center gap-3 mx-4'>
									<button className='border border-black rounded-md w-24 py-1'>
										Detail
									</button>
									<button
										onClick={() =>
											addToCart({
												...m,
												meal_count: mealCounts[m.meal_id] || 1,
											})
										}
										className='border border-black rounded-md w-24 py-1'
									>
										Select
									</button>
								</div>
							</div>
					  ))}
			</div>
		);
	};

	return (
		<div className='absolute top-[14%] right-[50%] translate-x-[50%] rounded-md shadow-md px-12 py-12 flex flex-col bg-white w-full md:w-3/5 h-[70vh]'>
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
					ref={inputRef}
					value={inputValue}
					onChange={handleInputChange}
					className='border border-gray-500 rounded-full px-24 py-3 z-10 bg-transparent w-full max-w-2xl'
				/>
			</div>
			{/* Meal Cart or List of Meal*/}
			{!searchInterface ? <MealCart /> : <ListOfMeal />}
		</div>
	);
};

export default MealInputModal;
