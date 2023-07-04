import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const FormReg = () => {
	return (
		<div className='w-full max-w-[1000px] grid border grid-cols-3 rounded-md overflow-hidden shadow-md'>
			<div className="overflow-hidden bg-[url('/img/1.jpg')] h-full bg-right bg-cover rounded-l-md hidden md:block">
				<div className='w-full h-full bg-black/30 mix-blend-multiply' />
			</div>
			<div className='col-span-3 md:col-span-2'>
				<div className='flex flex-col w-full justify-center relative'>
					<h1 className='font-semibold text-5xl px-8 mt-8 mb-2'>Register</h1>
					<p className='font-light px-8 mb-8'>
						Fill the account registration form.
					</p>
					<form className='px-8'>
						<div className='mb-5 '>
							<label
								htmlFor='user_name'
								className="block font-semibold mb-1 after:content-['*'] after:text-red-500 uppercase text-sm text-[#636363] after:ml-0.5"
							>
								Username
							</label>
							<div className='relative'>
								<span className='absolute top-[50%] -translate-y-[50%] left-5 -z-10'>
									<BiUser size={20} style={{ opacity: 0.3 }} />
								</span>
								<input
									type='text'
									className='w-full px-14 py-2 border rounded block text-small bg-transparent text-primary2  focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
									id='user_name'
									placeholder='Your username'
									name='user_name'
									required
								/>
							</div>
						</div>
						<div className='mb-5'>
							<label
								htmlFor='user_email'
								className="block font-semibold mb-1 after:content-['*'] after:text-red-500 text-[#636363] uppercase text-sm after:ml-0.5"
							>
								Email
							</label>
							<div className='relative'>
								<span className='absolute top-[50%] -translate-y-[50%] left-5 -z-10'>
									<AiOutlineMail size={20} style={{ opacity: 0.3 }} />
								</span>
								<input
									type='email'
									className='w-full px-14 py-2 border  rounded block  text-primary2  bg-transparent focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
									id='user_email'
									placeholder='user@example.com'
									name='user_email'
									required
								/>
							</div>
						</div>
						<div className='mb-5'>
							<label
								htmlFor='user_password'
								className="block font-semibold mb-1 after:content-['*'] after:text-red-500  uppercase text-sm text-[#636363] after:ml-0.5"
							>
								Password
							</label>
							<div className='relative'>
								<span className='absolute top-[50%] -translate-y-[50%] left-5 -z-10'>
									<AiOutlineLock size={20} style={{ opacity: 0.3 }} />
								</span>
								<input
									type='password'
									className='w-full px-14 py-2 border rounded block text-small text-primary2 bg-transparent focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
									id='user_password'
									placeholder='• • • • •'
									name='user_password'
									required
								/>
							</div>
						</div>
						<div className='mb-5'>
							<label
								htmlFor='confirmPassword'
								className="block font-semibold mb-1 after:content-['*'] after:text-red-500 text-[#636363] uppercase text-[13px] after:ml-0.5"
							>
								Verify password
							</label>
							<div className='relative'>
								<span className='absolute top-[50%] -translate-y-[50%] left-5 -z-10'>
									<AiOutlineLock size={20} style={{ opacity: 0.3 }} />
								</span>
								<input
									type='password'
									className='w-full px-14 py-2 border rounded block text-small text-primary2 bg-transparent focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
									id='confirmPassword'
									placeholder=''
									name='confirmPassword'
									required
								/>
							</div>
						</div>
						<div className='flex items-center justify-between mt-8 px-2'>
							<div className='text-blue-500 font-semibold align-middle'>
								<Link to='/login' className=''>
									Already Have Acount?
								</Link>
							</div>
							<Link
								type='submit'
								className='px-4 w-32 text-center bg-blue-500 text-white font-semibold hover:bg-blue-400 button '
								to='/dashboard'
							>
								Submit
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormReg;
