import React from "react";

const UserProfileButton = () => {
	return (
		<div className='w-24 h-24 rounded-full flex items-center overflow-hidden cursor-pointer mb-3'>
			<img
				src='../../../public/img/default-profile.png'
				className='scale-150'
				alt=''
			/>
		</div>
	);
};

export default UserProfileButton;
