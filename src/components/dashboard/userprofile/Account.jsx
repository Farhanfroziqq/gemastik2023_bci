import React, { useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
	const [inputValue, setInputValue] = useState({
		username: "fajarshiddiqqq",
		email: "fajarshiddiqqq@gmail.com",
		password: "",
	});

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	return (
		<div className='grid grid-cols-3 gap-x-8 px-4'>
			<div className='flex flex-col items-center '>
				<div className='w-24 h-24 rounded-full flex items-center overflow-hidden cursor-pointer mb-3'>
					<img
						src='../../../public/img/default-profile.png'
						className='scale-150'
						alt=''
					/>
				</div>
				<div className='flex items-center flex-col w-full my-4'>
					<button className='button w-full rounded-md mb-2'>
						Select Picture
					</button>
					<Link
						to='/login'
						className='button text-center w-full rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold'
					>
						Logout
					</Link>
				</div>
			</div>
			<div className='col-span-2'>
				<form>
					<div className='mb-5'>
						<label
							htmlFor='user_name'
							className='block font-semibold mb-1 uppercase text-sm'
						>
							Username
						</label>
						<input
							type='text'
							className='w-full px-3 py-2 border shadow-sm rounded block focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
							id='user_name'
							placeholder='Your username'
							name='user_name'
							value={inputValue.username}
							onChange={handleInputChange}
						/>
					</div>
					<div className='mb-5'>
						<label
							htmlFor='user_email'
							className='block font-semibold mb-1  uppercase text-sm'
						>
							Email
						</label>
						<input
							type='Email'
							className='w-full px-3 py-2 border shadow-sm rounded h-12 block focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
							id='user_email'
							value={inputValue.email}
							onChange={handleInputChange}
							name='user_email'
						/>
					</div>
					<div className='mb-5'>
						<label
							htmlFor='user_password'
							className='block font-semibold mb-1  uppercase text-sm'
						>
							Password
						</label>
						<input
							type='password'
							className='w-full px-3 py-2 border shadow-sm rounded block  focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
							id='user_password'
							placeholder='• • • • •'
							name='user_password'
							required
						/>
					</div>
					<button
						to='/dashboard'
						type='submit'
						className='col-span-3 w-full font-semibold bg-blue-500 text-center rounded-lg hover:bg-blue-600 my-4 button shadow-sm text-white'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Account;
