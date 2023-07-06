import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const FormLogin = () => {
	return (
		<div className='w-full max-w-[1000px] min-h-[60vh] grid grid-cols-3 rounded-md overflow-hidden border'>
			<div className="overflow-hidden bg-[url('/img/2.jpg')] h-full bg-center bg-cover hidden md:block">
				<div className='w-full h-full bg-black/30 mix-blend-multiply' />
			</div>
			<div className='col-span-3 md:col-span-2 w-full'>
				<div className='flex flex-col w-full justify-center'>
					<h1 className='font-semibold text-5xl px-8 mt-8 mb-2'>Login</h1>
					<p className='px-8 mb-8'>Fill all your credential</p>
					<form className='p-8'>
						<div className='mb-5 '>
							<label
								htmlFor='user_name'
								className='block font-semibold mb-1  uppercase text-[13px] text-[#636363] after:ml-0.5'
							>
								Username / email
							</label>
							<div className='relative'>
								<span className='absolute top-[50%] -translate-y-[50%] left-5 -z-10'>
									<BiUser size={20} style={{ opacity: 0.3 }} />
								</span>
								<input
									type='text'
									className='w-full px-14 py-2 border rounded block text-small bg-transparent text-primary2  focus:outline-none focus:ring-primary1 focus:border-primary2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer'
									id='user_name'
									name='user_name'
									placeholder='user@example.com'
									required
								/>
							</div>
						</div>
						<div className='mb-5'>
							<label
								htmlFor='user_password'
								className='block font-semibold mb-1 uppercase text-[13px] text-[#636363] after:ml-0.5'
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
									name='user_password'
									placeholder='• • • • •'
									required
								/>
							</div>
						</div>
						<Link to='/register' className='font-semibold text-blue-500 '>
							Forget Password?
						</Link>
					</form>
					<div className='flex justify-between mx-8 mb-2 text-blue-500 font-semibold items-center align-middle'>
						<Link to='/register'>Create new account</Link>
						<Link
							type='submit'
							className='px-4 w-32 text-center bg-blue-500 text-white font-semibold hover:bg-blue-400 button'
							to='/dashboard'
						>
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormLogin;
