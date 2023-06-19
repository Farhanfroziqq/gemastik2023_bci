import React from "react";

const DashboardNav = () => {
	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='w-24 h-24 rounded-full overflow-hidden bg-black hover:bg-slate-900 cursor-pointer'></div>
			<div className='border border-black rounded-lg px-4 py-2  cursor-pointer hover:bg-slate-100'>
				Reports
			</div>
		</div>
	);
};

export default DashboardNav;
