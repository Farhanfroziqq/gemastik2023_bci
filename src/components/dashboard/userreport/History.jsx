import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const History = () => {
	return (
		<div>
			<table className='w-full text-center'>
				<thead>
					<tr>
						<th className='pb-4'></th>
						<th className='pb-4'>Name</th>
						<th className='pb-4'>Calories</th>
						<th className='pb-4'>Count</th>
						<th className='pb-4'>Day</th>
						<th className='pb-4'>Date</th>
						<th className='pb-4'>Active</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='mb-2'>1</td>
						<td className='mb-2'>Egg</td>
						<td className='mb-2'>200</td>
						<td className='mb-2'>1</td>
						<td className='mb-2'>Saturday</td>
						<td className='mb-2'>2023-07-01</td>
						<td className='flex gap-2 justify-center mb-2'>
							<button className='bg-gray-500 w-6 h-6 flex items-center justify-center hover:bg-gray-400'>
								<BiEdit style={{ color: "white" }} />
							</button>
							<button className='bg-red-500 w-6 h-6 flex items-center justify-center hover:bg-red-400'>
								<BiTrash style={{ color: "white" }} />
							</button>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Beef</td>
						<td>375</td>
						<td>1</td>
						<td>Sunday</td>
						<td>2023-07-02</td>
						<td className='flex gap-2 justify-center'>
							<button className='bg-gray-500 w-6 h-6 flex items-center justify-center hover:bg-gray-400'>
								<BiEdit style={{ color: "white" }} />
							</button>
							<button className='bg-red-500 w-6 h-6 flex items-center justify-center hover:bg-red-400'>
								<BiTrash style={{ color: "white" }} />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default History;
