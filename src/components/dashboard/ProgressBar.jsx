import React, { useState, useEffect } from "react";

const ProgressBar = () => {
	const [meal, setMeal] = useState({
		calories: 0,
		protein: 0,
		fat: 0,
		carbohydrates: 0,
	});

	const target = {
		calories: 50,
		protein: 0,
		fat: 0,
		carbohydrates: 0,
	};

	const calculatePercentage = (value, total) => {
		const percentage = (value / total) * 100;
		return isNaN(percentage) ? 0 : Math.round(percentage);
	};

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>Meal Nutrition Tracker</h1>

			<div className='mb-4'>
				<label className='block font-semibold'>Calories</label>
				<input
					name='calories'
					value={`${meal.calories} / ${target.calories} kcal`}
					className='w-full py-1 px-2 rounded border-gray-300 bg-white'
					disabled
				/>
				<div className='bg-gray-200 rounded h-4 mt-2'>
					<div
						className='bg-blue-500 h-full'
						style={{
							width: `${calculatePercentage(meal.calories, target.calories)}%`,
						}}
					/>
				</div>
			</div>

			<div className='mb-4'>
				<label className='block font-semibold'>Protein</label>
				<input
					name='protein'
					value={`${meal.protein} / ${target.protein} g`}
					className='w-full py-1 px-2 rounded border-gray-300 bg-white'
					disabled
				/>
				<div className='bg-gray-200 rounded h-4 mt-2'>
					<div
						className='bg-green-500 h-full'
						style={{
							width: `${calculatePercentage(meal.protein, target.protein)}%`,
						}}
					/>
				</div>
			</div>

			<div className='mb-4'>
				<label className='block font-semibold'>Fat</label>
				<input
					name='fat'
					value={`${meal.fat} / ${target.fat} g`}
					className='w-full py-1 px-2 rounded border-gray-300 bg-white'
					disabled
				/>
				<div className='bg-gray-200 rounded h-4 mt-2'>
					<div
						className='bg-yellow-500 h-full'
						style={{ width: `${calculatePercentage(meal.fat, target.fat)}%` }}
					/>
				</div>
			</div>

			<div className='mb-4'>
				<label className='block font-semibold'>Carbohydrates</label>
				<input
					name='carbohydrates'
					value={`${meal.carbohydrates} / ${target.carbohydrates} g`}
					className='w-full py-1 px-2 rounded border-gray-300 bg-white'
					disabled
				/>
				<div className='bg-gray-200 rounded h-4 mt-2'>
					<div
						className='bg-red-500 h-full'
						style={{
							width: `${calculatePercentage(
								meal.carbohydrates,
								target.carbohydrates
							)}%`,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
