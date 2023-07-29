import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import history from "../../../assets/history";

const History = () => {
	return (
		<div>
			<table className='w-full max-w-[1000px] mx-auto text-center table-fixed'>
				<thead>
					<tr className='border-b'>
						<th className='pb-2 w-20'></th>
						<th className='pb-3'>Total Calories</th>
						<th className='pb-3'>Meal</th>
						<th className='pb-3'>Day</th>
						<th className='pb-3'>Date</th>
						<th className='pb-3'>Action</th>
					</tr>
				</thead>
				<tbody>
					{history.map((hist, index) => (
						<tr key={hist.history_id}>
							<td className='py-4 text-gray-400 select-none'>{index + 1}</td>
							<td className='py-4'>{hist.total_calories}kcal</td>
							<td className='py-4'>{hist.selected_meal}</td>
							<td className='py-4'>{hist.day}</td>
							<td className='py-4'>{hist.date}</td>
							<td className='flex gap-2 justify-center py-4'>
								<button className='bg-gray-500 w-6 h-6 flex items-center justify-center hover:bg-gray-400'>
									<BiEdit style={{ color: "white" }} />
								</button>
								<button className='bg-red-500 w-6 h-6 flex items-center justify-center hover:bg-red-400'>
									<BiTrash style={{ color: "white" }} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default History;
