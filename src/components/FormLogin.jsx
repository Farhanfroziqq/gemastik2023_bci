import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {
	return (
		<div className='flex flex-col w-full lg:w-2/4 border-2 justify-center max-w-[700px]'>
			<h1 className='font-bold px-8 my-4'>Login Form</h1>
			<form className='px-8'>
				<div>
					<label
						htmlFor='email'
						className="block font-semibold mb-1 after:content-['*'] after:text-primary2 after:ml-0.5"
					>
						Email
					</label>
					<input
						type='email'
						className='w-full px-3 py-2 border shadow rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='email'
						placeholder='Email'
						name='email'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='Password'
						className="block font-semibold mb-1 after:content-['*'] after:text-primary2 after:ml-0.5"
					>
						Password
					</label>
					<input
						type='password'
						className='w-full px-3 py-2 border shadow rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='Password'
						placeholder='Password'
						name='Password'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='Pass-confirm'
						className="block font-semibold mb-1 after:content-['*'] after:text-primary2 after:ml-0.5"
					>
						Password Confirmation
					</label>
					<input
						type='password'
						className='w-full px-3 py-2 border shadow rounded block text-small placeholder:text-slate-400 text-primary2 font-semibold focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
						id='Pass-confirm'
						placeholder='Password confirmation'
						name='Pass-confirm'
						required
					/>
				</div>
				<button
					type='submit'
					className=' px-2 py-2 w-full bg-white text-primary1 rounded-lg hover:bg-slate-400 my-4 button shadow-lg'
				>
					Sign Up
				</button>
			</form>

			<div className='flex justify-center my-4 text-blue-500'>
				<Link to='/register'>Already Have Acount?</Link>
			</div>
		</div>
	);
};

export default FormLogin;
